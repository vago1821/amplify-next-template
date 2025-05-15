"use client";
import "./../app/app.css";
import "./page.css";
import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";

// Amplify.configure(outputs);

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const options = [
    "BABY FORMULA",
    "FINE WASHABLES DETERGENT CONSUMERS",
    "HAIR COLOR PURCHASERS",
    "HAIR COLOR PURCHASERS BLONDE",
    "HAIR COLOR PURCHASERS BROWN",
    "HAIR COLOR PURCHASERS RED",
    "HAIR COLOR PURCHASERS BROWN",
    "HEAVY PEANUT BUTTER PURCHASERS",
    "PEANUT BUTTER SWITCHERS"
  ];
  
  const toggleOption = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };
  return (
    <div className="container">
      <div className="text-section">
        <div className="dropdown-container">
          <label>Field:</label>
          <div className="custom-dropdown">
            <div 
              className="dropdown-selected" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOptions.length > 0 
                ? `${selectedOptions.length} selected` 
                : "Select an option"}
            </div>
            {isOpen && (
              <div className="dropdown-options">
                {options.map((option) => (
                  <div 
                    key={option} 
                    className="dropdown-option"
                    onClick={() => toggleOption(option)}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedOptions.includes(option)} 
                      onChange={() => {}} 
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="value-container">
          <label>Value:</label>
          <div className="value-box">1</div>
        </div>
        <div className="range-container">
          <label>Level:</label>
          <div className="value-box">2512</div>
        </div>
        <div className="range-container">
          <label>% change:</label>
          <div className="value-box">26%</div>
        </div>
        <div className="range-container">
          <label>Current Count:</label>
          <div className="value-box">234,637</div>
        </div>
        <div className="range-container">
          <label>Previous Count:</label>
          <div className="value-box">100,000</div>
        </div>
        <div className="range-container">
          <label>Predicted Range:</label>
          <div className="value-box">200K-240K</div>
        </div>
      </div>
      <div className="image-section">
        <img 
          src="/image.png" 
          alt="Data Visualization" 
          className="main-image"
        />
      </div>
    </div>
  );
}