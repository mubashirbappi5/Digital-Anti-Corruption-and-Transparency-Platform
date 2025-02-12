import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch user data (Replace with real API)
    axios
      .get("http://localhost:7000/user-profile", { withCredentials: true }) // Make sure user is authenticated
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const sendOtp = async () => {
    if (!user?.phone) return;

    try {
      const response = await axios.post("http://localhost:7000/send-otp", {
        phone: user.phone,
      });
      setOtpSent(true);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const verifyOtp = async () => {
    if (!otp) return;

    try {
      const response = await axios.post("http://localhost:7000/verify-otp", {
        phone: user.phone,
        otp,
      });
      setMessage(response.data.message);
      setUser({ ...user, verified: true }); // Update UI
      setOtpSent(false);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p>
        <strong>Status:</strong>{" "}
        {user.verified ? <span style={{ color: "green" }}>Verified ✅</span> : <span style={{ color: "red" }}>Unverified ❌</span>}
      </p>

      {!user.verified && (
        <div>
          {!otpSent ? (
            <button onClick={sendOtp}>Send OTP</button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={verifyOtp}>Verify</button>
            </div>
          )}
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
