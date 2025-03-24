import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="page-container" style={{ justifyContent: "center" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 className="page-title">Welcome to PopX</h1>
        <p className="page-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary">Create Account</button>
          </Link>
        </div>

        <div style={{ marginTop: "16px" }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="btn btn-secondary">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

