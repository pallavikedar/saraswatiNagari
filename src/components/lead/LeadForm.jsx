import React, { useState } from "react";
import styles from "./LeadForm.module.css";

const LeadForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", area: "", time: "Morning", whatsappConsent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!form.name || !form.phone) { 
      alert("Please fill required fields"); 
      return; 
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare data for API
      const apiData = {
        fullName: form.name,
        phoneNumber: form.phone,
        preferredAreaOrProject: form.area || "Saraswati Nagari 2",
        bestTimeToCall: form.time
      };

      // POST to API
      const response = await fetch('https://api.sgroup.space/free-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      // Handle response
      if (response.ok) {
        const result = await response.json();
       
        setSubmitStatus('success');
        alert("Consultation scheduled successfully!");
        
        // Optional: Reset form after successful submission
        setForm({
          name: "", phone: "", area: "", time: "Morning", whatsappConsent: true,
        });
      } else {
        // Handle API error
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        setSubmitStatus('error');
        alert(`Server error (${response.status}). Please try again or contact support.`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setSubmitStatus('error');
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section} id="form">
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.badge}>NMRDA Sanctioned Layouts</div>
          <div>
            <h3 className={styles.heading}>
              Get Your Free Brochure &amp;<br />
              <span className={styles.gold}>Plot Details Today</span>
            </h3>
            <div className={styles.divider} />
          </div>
          <p className={styles.subtext}>
            Trusted by 1000+ families in Nagpur. Get transparent pricing, free site
            visit, and expert guidance — no spam, just details.
          </p>
          <div className={styles.perks}>
            {[
              { icon: "✔", title: "NMRDA Approved",     sub: "Fully sanctioned layouts" },
              { icon: "₹", title: "Transparent Pricing", sub: "No hidden charges" },
              { icon: "📍", title: "Free Site Visit",    sub: "Book at your convenience" },
              { icon: "👥", title: "Expert Guidance",    sub: "20+ years experience" },
            ].map((p) => (
              <div key={p.title} className={styles.perk}>
                <div className={styles.perkIcon}>{p.icon}</div>
                <div className={styles.perkText}>
                  <strong>{p.title}</strong>
                  <span>{p.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className={styles.right}>
          <p className={styles.formTitle}>Schedule a Free Consultation</p>
         
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Full Name *</label>
                <input type="text" name="name" placeholder="Your name"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <label>Phone Number *</label>
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX"
                  value={form.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.field}>
              <label>Preferred Area / Project</label>
              <select name="area" value={form.area} onChange={handleChange}>
                <option value="">Select a location</option>
                {["Hingna","Kalmeshwar","Chicholi","Fetri","Khadgaon",
                  "Kamptee","Nagpur","Chhindwara","Godhni","Lonara","Lava"]
                  .map(a => <option key={a}>{a}</option>)}
              </select>
            </div>

            <div className={styles.timeGroup}>
              <label className={styles.timeLabel}>Best Time to Call</label>
              <div className={styles.radioRow}>
                {["Morning", "Afternoon", "Evening"].map((t) => (
                  <label key={t} className={`${styles.radioPill} ${form.time === t ? styles.radioActive : ""}`}>
                    <input type="radio" name="time" value={t}
                      checked={form.time === t} onChange={handleChange} />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <label className={styles.consent}>
              <input type="checkbox" name="whatsappConsent"
                checked={form.whatsappConsent} onChange={handleChange} />
              Contact me on WhatsApp too
            </label>

            <button type="submit" className={styles.cta} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Schedule Consultation →"}
            </button>

            {/* Optional: Show status message */}
            {submitStatus === 'success' && (
              <p style={{ color: 'green', marginTop: '10px' }}>
                ✓ Consultation scheduled successfully!
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: 'red', marginTop: '10px' }}>
                ✗ Submission failed. Please try again.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default LeadForm;