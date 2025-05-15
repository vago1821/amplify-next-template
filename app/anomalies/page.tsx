"use client";
import "./../../app/app.css";
import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(outputs);

export default function AnomaliesPage() {
  return (
    <div className="anomalies-container">
      <h1>Anomalies Dashboard</h1>
      <div className="anomaly-image-container">
        <div className="image-placeholder">
          <span>Anomaly Image Placeholder</span>
        </div>
      </div>
      <style jsx>{`
        .anomalies-container {
          padding: 20px;
          height: 100%;
        }
        h1 {
          margin-bottom: 30px;
        }
        .anomaly-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80%;
        }
        .image-placeholder {
          width: 80%;
          height: 500px;
          background-color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #999;
        }
        .image-placeholder span {
          color: #666;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}