import React from "react";
// import "./Coba.css";

function Coba() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="login" class="btn solid" />

            <p className="social-text">Or sign in with social platform</p>
            <div className="social-media">
              <a className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a className="social-icon">
                <i className="fab fa-linked-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/64d58efce2.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Coba;
