// import React, { useState } from "react";
// import styles from "./LeadForm.module.css";

// const LeadForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     area: "",
//     time: "Morning",
//     whatsappConsent: true,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.phone) {
//       alert("Please fill required fields");
//       return;
//     }

//     const message = `Hello, I’m interested in plot details.

// Name: ${form.name}
// Phone: ${form.phone}
// Preferred Area: ${form.area || "Not specified"}
// Best Time to Call: ${form.time}
// WhatsApp Contact: ${form.whatsappConsent ? "Yes" : "No"}

// Please share brochure & pricing details.`;

//     const whatsappNumber = "919494942894"; // ← your number
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(url, "_blank");
//   };

//   return (
//     <section className={styles.section} id="form">
//       <div className={styles.container}>
//         {/* LEFT */}
//         <div className={styles.benefits}>
//           <h3>Get Your Free Brochure & Plot Details</h3>
//           <ul>
//             <li>✔ NMRDA Approved Layouts</li>
//             <li>✔ Transparent Pricing</li>
//             <li>✔ Free Site Visit</li>
//             <li>✔ Expert Guidance</li>
//           </ul>
//         </div>

//         {/* RIGHT */}
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name *"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number *"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />

//           <select name="area" value={form.area} onChange={handleChange}>
//             <option value="">Preferred Area / Project</option>
//             <option>Hingna</option>
//             <option>Kalmeshwar</option>
//             <option>Chicholi</option>
//             <option>Fetri</option>
//             <option>Khadgaon</option>
//             <option>Kamptee</option>
//             <option>Nagpur</option>
//             <option>Chhindwara</option>
//             <option>Godhni</option>
//             <option>Lonara</option>
//             <option>Lava</option>
//           </select>

//           <div className={styles.radioGroup}>
//             <label>
//               <input
//                 type="radio"
//                 name="time"
//                 value="Morning"
//                 checked={form.time === "Morning"}
//                 onChange={handleChange}
//                 style={{color:"black"}}
//               />
//               Morning
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="time"
//                 value="Afternoon"
//                 checked={form.time === "Afternoon"}
//                 onChange={handleChange}
//                 style={{color:"black"}}
//               />
//               Afternoon
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="time"
//                 value="Evening"
//                 checked={form.time === "Evening"}
//                 onChange={handleChange}
//                 style={{color:"black"}}
//               />
//               Evening
//             </label>
//           </div>

//           <label className={styles.checkbox}>
//             <input
//               type="checkbox"
//               name="whatsappConsent"
//               checked={form.whatsappConsent}
//               onChange={handleChange}
//             />
//             Contact me on WhatsApp too
//           </label>

//           <button type="submit" className={styles.cta}>
//             Get Details Now
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default LeadForm;
import React, { useState } from "react";
import styles from "./LeadForm.module.css";

const LeadForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", area: "", time: "Morning", whatsappConsent: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { alert("Please fill required fields"); return; }
    const message = `Hello, I'm interested in plot details.\n\nName: ${form.name}\nPhone: ${form.phone}\nPreferred Area: ${form.area || "Not specified"}\nBest Time to Call: ${form.time}\nWhatsApp Contact: ${form.whatsappConsent ? "Yes" : "No"}\n\nPlease share brochure & pricing details.`;
    window.open(`https://wa.me/919494942894?text=${encodeURIComponent(message)}`, "_blank");
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

            <button type="submit" className={styles.cta}>Get Details Now →</button>

            
          </form>
        </div>

      </div>
    </section>
  );
};

export default LeadForm;