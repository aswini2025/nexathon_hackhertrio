/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewMainPage.css'; // Ensure this file exists
import backgroundImage from './bgimage.jpg'; // Make sure this path is correct

function NewMainPage() {
  const navigate = useNavigate();

  return (
    <div className="new-main-page" style={{ backgroundImage: url(${backgroundImage}) }}>
      <div className="content">
        <h1>Instant Medical Insights, Simplified Reports</h1>
        <p>Get clear explanations for your health reports in seconds!</p>
        <div className="buttons">
          <button onClick={() => navigate('/mainpage')} className="get-started">Get Started</button>
          <button className="find-out-more">Find Out More</button>
        </div>
      </div>
    </div>
  );
}

export default NewMainPage;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewMainPage.css'; // Ensure this file exists
import backgroundImage from './bgimage.jpg'; // Ensure this path is correct

function NewMainPage() {
  const navigate = useNavigate();

  return (
    <div className="new-main-page" style={{ backgroundImage: 'url(${backgroundImage})' }}>
      <div className="content">
        <h1>Instant Medical Insights, Simplified Reports</h1>
        <p>Get clear explanations for your health reports in seconds!</p>
        <div className="buttons">
          <button
            onClick={() => navigate('/mainpage')}
            style={{
              background: "linear-gradient(to right, #8E2DE2, #4A00E0)", // Purple gradient
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Get Started
          </button>

          <button
            className="find-out-more"
            style={{
                background: "linear-gradient(to right, #8E2DE2, #4A00E0)", // Purple gradient
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
            }}
          >
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewMainPage;