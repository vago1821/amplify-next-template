"use client";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(outputs);

export default function App() {
  return (
    <div className="container">
      <div className="text-section">
        <h3>Text Placeholder</h3>
        <p>Enter your content here...</p>
      </div>
      <div className="image-section">
        <div className="image-placeholder">
          <span>Image Placeholder</span>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          width: 100%;
        }
        .text-section {
          width: 300px;
          padding: 20px;
          padding-top: 100px;
          background-color: #f8f8f8;
          border-right: 1px solid #e0e0e0;
        }
        .text-section h3 {
          margin-top: 0;
          font-size: 18px;
        }
        .text-section p {
          font-size: 14px;
        }
        .image-section {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-placeholder {
          width: 500px;
          height: 300px;
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