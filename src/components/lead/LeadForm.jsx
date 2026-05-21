import React, { useState } from "react";
import styles from "./LeadForm.module.css";

const LeadForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [form, setForm] = useState({
    name: "", phone: "", area: "", time: "Morning", whatsappConsent: true,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });

    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Name: min 2 chars, letters and spaces only
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (!nameRegex.test(form.name.trim())) {
      newErrors.name = "Name must be at least 2 characters (letters only).";
    }

    // Phone: Indian mobile, starts with 6-9, exactly 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanedPhone = form.phone.replace(/\s+/g, "").replace(/^\+91/, "");
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiData = {
        fullName: form.name,
        phoneNumber: form.phone,
        preferredAreaOrProject: form.area || "Saraswati Nagari 2",
        bestTimeToCall: form.time,
      };

      const response = await fetch(`${API_BASE_URL}/free-consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        await response.json();
        setSubmitStatus("success");
        alert("Consultation scheduled successfully!");
        setForm({ name: "", phone: "", area: "", time: "Morning", whatsappConsent: true });
        setErrors({});
      } else {
        const errorText = await response.text();
        console.error("API Error:", response.status, errorText);
        setSubmitStatus("error");
        alert(`Server error (${response.status}). Please try again or contact support.`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setSubmitStatus("error");
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
              { icon: "✔", title: "NMRDA Approved",      sub: "Fully sanctioned layouts" },
              { icon: "₹", title: "Transparent Pricing",  sub: "No hidden charges" },
              { icon: "📍", title: "Free Site Visit",     sub: "Book at your convenience" },
              { icon: "👥", title: "Expert Guidance",     sub: "20+ years experience" },
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

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>

              {/* Full Name */}
              <div className={styles.field}>
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? styles.inputError : ""}
                />
                {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className={styles.field}>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className={errors.phone ? styles.inputError : ""}
                />
                {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
              </div>

            </div>

            {/* Area */}
            <div className={styles.field}>
              <label>Preferred Area / Project</label>
              <select name="area" value={form.area} onChange={handleChange}>
                <option value="">Select a location</option>
                {["Hingna", "Kalmeshwar", "Chicholi", "Fetri", "Khadgaon",
                  "Kamptee", "Nagpur", "Chhindwara", "Godhni", "Lonara", "Lava"]
                  .map(a => <option key={a}>{a}</option>)}
              </select>
            </div>

            {/* Best Time to Call */}
            <div className={styles.timeGroup}>
              <label className={styles.timeLabel}>Best Time to Call</label>
              <div className={styles.radioRow}>
                {["Morning", "Afternoon", "Evening"].map((t) => (
                  <label
                    key={t}
                    className={`${styles.radioPill} ${form.time === t ? styles.radioActive : ""}`}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={t}
                      checked={form.time === t}
                      onChange={handleChange}
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            {/* WhatsApp Consent */}
            <label className={styles.consent}>
              <input
                type="checkbox"
                name="whatsappConsent"
                checked={form.whatsappConsent}
                onChange={handleChange}
              />
              Contact me on WhatsApp too
            </label>

            <button type="submit" className={styles.cta} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Schedule Consultation →"}
            </button>

            {submitStatus === "success" && (
              <p style={{ color: "green", marginTop: "10px" }}>
                ✓ Consultation scheduled successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p style={{ color: "red", marginTop: "10px" }}>
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