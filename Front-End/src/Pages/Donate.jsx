import React, { useState } from 'react';
import '../Css/Donate.css'// Import CSS file for styling
import axios from "axios";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    amount: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to your backend for processing
    console.log(formData);
    if (formData.name && formData.amount && formData.address && formData.phoneNumber) {
      axios.post('http://localhost:3000/Donate', {
        name:formData.name,
        address:formData.address,
        amount:formData.amount,
        phoneNumber:formData.phoneNumber
    })}
  };

  return (
    <div className="donation-container">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pay with UPI</button>
      </form>
    </div>
  );
};

export default Donation;
