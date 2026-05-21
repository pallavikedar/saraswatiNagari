import React, { useState, useEffect } from 'react';
import './EnquiryForm.css';
import { useNavigate, useLocation } from 'react-router-dom';

const EnquiryForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
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

  const [errors, setErrors] = useState({});
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

    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Phone validation (Indian mobile: starts with 6-9, exactly 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanedPhone = formData.contactNo.replace(/\s+/g, '');
    if (!formData.contactNo) {
      newErrors.contactNo = 'Contact number is required.';
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.contactNo = 'Enter a valid 10-digit Indian mobile number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    // Interested Layout validation
    if (!formData.interestedLayout) {
      newErrors.interestedLayout = 'Please select a layout.';
    }

    // Availability validation
    if (!formData.availability) {
      newErrors.availability = 'Please select availability.';
    }

    // Contact time validation
    if (!formData.contactTime) {
      newErrors.contactTime = 'Please select a preferred contact time.';
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
        projectName: projectName || formData.interestedLayout || 'Saraswati Nagari',
        plotNumber: selectedPlot?.id || 'N/A',
        plotType: selectedPlot?.type || 'Standard Lot',
        price: parseFloat(selectedPlot?.price?.replace(/[^0-9.-]+/g, '')) || 0,
        plotSize: selectedPlot?.size || 'N/A',
        areaSqft: selectedPlot?.area !== 'N/A' ? parseFloat(selectedPlot?.area) : 0,
        facing: selectedPlot?.facing !== 'N/A' ? selectedPlot.facing : 'N/A',
        name: formData.name,
        contactNo: formData.contactNo,
        email: formData.email,
        interestedLayout: formData.interestedLayout,
        availability: formData.availability,
        preferredContactTime: formData.contactTime,
      };

      const response = await fetch(`${API_BASE_URL}/plot-enquiries/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        alert('Enquiry submitted successfully! We will contact you soon.');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        setSubmitStatus('error');
        alert(`Server error (${response.status}). Please try again or contact support.`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setSubmitStatus('error');
      alert('Network error. Please check your connection and try again.');
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
            : "Fill in your details and we'll contact you soon"}
        </p>

        <form onSubmit={handleSubmit} className="enquiry-form" noValidate>

          {/* Name & Contact */}
          <div className="form-row">
            <div className="form-group">
              <label>Name <span className="required">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Contact No. <span className="required">*</span></label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                placeholder="98765 43210"
                maxLength={10}
              />
              {errors.contactNo && <span className="error-msg">{errors.contactNo}</span>}
            </div>
          </div>

          {/* Email */}
          <div className="form-row">
            <div className="form-group full-width">
              <label>Email Address <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
          </div>

          {/* Layout & Availability */}
          <div className="form-row">
            <div className="form-group">
              <label>Interested Layout <span className="required">*</span></label>
              <select
                name="interestedLayout"
                value={formData.interestedLayout}
                onChange={handleChange}
              >
                <option value="">Select Layout</option>
                {projectName ? (
                  <option value={projectName}>{projectName}</option>
                ) : (
                  [...Array(11)].map((_, i) => {
                    const num = i + 1;
                    const formatted = num < 10 ? `0${num}` : num;
                    return (
                      <option key={num} value={`Saraswati Nagari ${formatted}`}>
                        Saraswati Nagari {formatted}
                      </option>
                    );
                  })
                )}
              </select>
              {errors.interestedLayout && <span className="error-msg">{errors.interestedLayout}</span>}
            </div>

            <div className="form-group">
              <label>Availability <span className="required">*</span></label>
              <select name="availability" value={formData.availability} onChange={handleChange}>
                <option value="">Select</option>
                <option>Immediately</option>
                <option>Within 1 Month</option>
                <option>Within 3 Months</option>
                <option>Within 6 Months</option>
                <option>Later</option>
              </select>
              {errors.availability && <span className="error-msg">{errors.availability}</span>}
            </div>
          </div>

          {/* Preferred Contact Time */}
          <div className="form-row">
            <div className="form-group full-width">
              <label>Preferred Contact Time <span className="required">*</span></label>
              <select name="contactTime" value={formData.contactTime} onChange={handleChange}>
                <option value="">Choose Time</option>
                {['Morning', 'Afternoon', 'Evening'].map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              {errors.contactTime && <span className="error-msg">{errors.contactTime}</span>}
            </div>
          </div>

          {/* Selected Plot Info */}
          {selectedPlot && (
            <div className="selected-plot-info">
              <h4>Selected Plot Details:</h4>
              <div className="plot-details">
                <p><strong>Plot Number:</strong> {selectedPlot.id}</p>
                <p><strong>Type:</strong> {selectedPlot.type}</p>
                <p><strong>Price:</strong> {selectedPlot.price}</p>
                <p><strong>Size:</strong> {selectedPlot.size}</p>
                {selectedPlot.area !== 'N/A' && <p><strong>Area:</strong> {selectedPlot.area}</p>}
                {selectedPlot.facing !== 'N/A' && <p><strong>Facing:</strong> {selectedPlot.facing}</p>}
              </div>
            </div>
          )}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>

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