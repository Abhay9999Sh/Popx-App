"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Registration data:", formData)
    navigate("/account")
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Create your PopX account</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div className="form-group">
          <label className="form-label required" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            className="form-input"
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label required" htmlFor="phoneNumber">
            Phone number
          </label>
          <input
            id="phoneNumber"
            className="form-input"
            type="tel"
            name="phoneNumber"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label required" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className="form-input"
            type="email"
            name="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label required" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="form-input"
            type="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="companyName">
            Company name
          </label>
          <input
            id="companyName"
            className="form-input"
            type="text"
            name="companyName"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label required">Are you an Agency?</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                id="agencyYes"
                className="radio-input"
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              <label className="radio-label" htmlFor="agencyYes">
                Yes
              </label>
            </div>

            <div className="radio-option">
              <input
                id="agencyNo"
                className="radio-input"
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
              <label className="radio-label" htmlFor="agencyNo">
                No
              </label>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register

