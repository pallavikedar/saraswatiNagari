import React, { useState, useEffect } from 'react';
import './EnquiryForm.css';
import { useNavigate, useLocation } from 'react-router-dom';

const EnquiryForm = () => {
  const { state } = useLocation();
  const projectName = state?.projectName;
  const selectedPlot = state?.selectedPlot;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    interestedLayout: '',
    availability: '',
    contactTime: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-populate interestedLayout when projectName is available
  useEffect(() => {
    if (projectName) {
      setFormData(prev => ({
        ...prev,
        interestedLayout: projectName
      }));
    }
  }, [projectName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare data for API based on the required format
      const apiData = {
        projectName: projectName || formData.interestedLayout || "Saraswati Nagari",
        plotNumber: selectedPlot?.id || "N/A",
        plotType: selectedPlot?.type || "Standard Lot",
        price: parseFloat(selectedPlot?.price?.replace(/[^0-9.-]+/g, '')) || 0,
        plotSize: selectedPlot?.size || "N/A",
        areaSqft: selectedPlot?.area !== "N/A" ? parseFloat(selectedPlot?.area) : 0,
        facing: selectedPlot?.facing !== "N/A" ? selectedPlot.facing : "N/A",
        name: formData.name,
        contactNo: formData.contactNo,
        email: formData.email,
        interestedLayout: formData.interestedLayout,
        availability: formData.availability,
        preferredContactTime: formData.contactTime
      };

      console.log('Sending API Data:', apiData);

      // POST to API
      const response = await fetch('https://api.sgroup.space/plot-enquiries/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      // Handle response
      if (response.ok) {
        const result = await response.json();
        console.log('API Success:', result);
        setSubmitStatus('success');
        
        // Show success message
        alert('Enquiry submitted successfully! We will contact you soon.');
        
        // Optional redirect after successful submission
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
    <div className="enquiry-container">
      <div className="enquiry-card">
        <h2 className="enquiry-title">Get in Touch</h2>
        <p className="enquiry-subtitle">
          {projectName 
            ? `Enquiry for ${projectName}${selectedPlot ? ` - Plot ${selectedPlot.id}` : ''}` 
            : 'Fill in your details and we\'ll contact you soon'}
        </p>

        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name <span className="required">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label>Contact No. <span className="required">*</span></label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Email Address <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Interested Layout <span className="required">*</span></label>
              <select 
                name="interestedLayout" 
                value={formData.interestedLayout} 
                onChange={handleChange} 
                required
              >
                <option value="">Select Layout</option>
                {projectName ? (
                  <option value={projectName}>{projectName}</option>
                ) : (
                  [...Array(11)].map((_, i) => {
                    const num = i + 1;
                    const formatted = num < 10 ? `0${num}` : num;
                    return <option key={num} value={`Saraswati Nagari ${formatted}`}>Saraswati Nagari {formatted}</option>;
                  })
                )}
              </select>
            </div>

            <div className="form-group">
              <label>Availability <span className="required">*</span></label>
              <select name="availability" value={formData.availability} onChange={handleChange} required>
                <option value="">Select</option>
                <option>Immediately</option>
                <option>Within 1 Month</option>
                <option>Within 3 Months</option>
                <option>Within 6 Months</option>
                <option>Later</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Preferred Contact Time <span className="required">*</span></label>
              <select name="contactTime" value={formData.contactTime} onChange={handleChange} required>
                <option value="">Choose Time</option>
                {["Morning", "Afternoon", "Evening"].map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Display selected plot info if available */}
          {selectedPlot && (
            <div className="selected-plot-info">
              <h4>Selected Plot Details:</h4>
              <div className="plot-details">
                <p><strong>Plot Number:</strong> {selectedPlot.id}</p>
                <p><strong>Type:</strong> {selectedPlot.type}</p>
                <p><strong>Price:</strong> {selectedPlot.price}</p>
                <p><strong>Size:</strong> {selectedPlot.size}</p>
                {selectedPlot.area !== "N/A" && <p><strong>Area:</strong> {selectedPlot.area}</p>}
                {selectedPlot.facing !== "N/A" && <p><strong>Facing:</strong> {selectedPlot.facing}</p>}
              </div>
            </div>
          )}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <p style={{ color: 'green', marginTop: '15px', textAlign: 'center' }}>
              ✓ Enquiry submitted successfully! Redirecting...
            </p>
          )}
          {submitStatus === 'error' && (
            <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>
              ✗ Submission failed. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;