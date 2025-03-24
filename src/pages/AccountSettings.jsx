import profileImage from "../assets/image.png"

function AccountSettings() {
  return (
    <div className="page-container">
      <div
        style={{
          padding: "16px 0",
          borderBottom: "1px solid #eee",
          marginBottom: "16px",
        }}
      >
        <h1 className="page-title">Account Settings</h1>
      </div>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <img
            src={profileImage || "/placeholder.svg"}
            alt="Profile"
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "#8a56ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
            }}
          >
            ✏️
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "500" }}>Marry Doe</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Marry@Gmail.Com</p>
        </div>
      </div>

      <p
        style={{
          marginTop: "24px",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#666",
        }}
      >
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
        Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  )
}

export default AccountSettings

