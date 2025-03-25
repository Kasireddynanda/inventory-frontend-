import "./Signup.css"; // Import CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <input type="text" placeholder="Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
