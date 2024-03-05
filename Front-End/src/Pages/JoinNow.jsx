import React, { useState } from 'react';
import axios from "axios";
const JoinNow = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.email) {
      alert("Our Team Will Contact You Soon")
      axios.post('http://localhost:3000/pandi', {
        firstname:formData.firstName,
        lastname:formData.lastName,
        email:formData.email,
        address:formData.address,
        city:formData.city,
        country:formData.country,
        state:formData.state,
        zip:formData.zip
    })}
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4">Join Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                placeholder="Enter your first name" 
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                placeholder="Enter your last name" 
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email address" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              className="form-control" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Enter your phone number" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              className="form-control" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              placeholder="Enter your address" 
            />
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                className="form-control" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                placeholder="Enter your city" 
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state">State</label>
              <input 
                type="text" 
                className="form-control" 
                id="state" 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                placeholder="Enter your state" 
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="country">Country</label>
              <input 
                type="text" 
                className="form-control" 
                id="country" 
                name="country" 
                value={formData.country} 
                onChange={handleChange} 
                placeholder="Enter your country" 
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="zip">Zip</label>
            <input 
              type="text" 
              className="form-control" 
              id="zip" 
              name="zip" 
              value={formData.zip} 
              onChange={handleChange} 
              placeholder="Enter your zip code" 
            />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
