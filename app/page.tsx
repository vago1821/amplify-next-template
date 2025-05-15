"use client";
import "./../app/app.css";
import "./page.css";
import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(outputs);

export default function HomePage() {
  return (
    <div className="container">
      <div className="text-section">
        <div className="dropdown-container">
          <label htmlFor="spg-dropdown">Field:</label>
          <select id="spg-dropdown" className="dropdown">
            <option value="">Select an option</option>
            {/* You can manually populate more options here */}
            <option value="">TSPDE_MT_BABY_FORMULA_PURCHASERS</option>
            <option value="">TSPDE_MT_FINE_WASHABLES_DETERGENT_CONSUMERS</option>
            <option value="">TSPDE_MT_HAIR_COLOR_PURCHASERS</option>
            <option value="">TSPDE_MT_HAIR_COLOR_PURCHASERS_BLONDE</option>
            <option value="">TSPDE_MT_HAIR_COLOR_PURCHASERS_BROWN</option>
            <option value="">TSPDE_MT_HAIR_COLOR_PURCHASERS_RED</option>
            <option value="">TSPDE_MT_HAIR_COLOR_PURCHASERS_BROWN</option>
            <option value="">TSPDE_MT_HEAVY_PEANUT_BUTTER_PURCHASERS</option>
            <option value="">TSPDE_MT_PEANUT_BUTTER_SWITCHERS</option>
          </select>
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
        <div className="image-placeholder">
          <span>Image Placeholder</span>
        </div>
      </div>
    </div>
  );
}