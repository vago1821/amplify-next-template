"use client";
import "./../../app/app.css";
import "./page.css";
import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";

// Amplify.configure(outputs);

export default function AnomaliesPage() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [verifiedRows, setVerifiedRows] = useState<number[]>([]);
  return (
    <div className="container">
      <div className="text-section">
        <h2>Anomalies Dashboard</h2>
        
        <div className="table-container">
          <div className="table-header">
            <div className="table-cell">Selection</div>
            <div className="table-cell">Field</div>
            <div className="table-cell">Value</div>
            <div className="table-cell">Level</div>
            <div className="table-cell">Verified?</div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">
              <input 
                type="radio" 
                name="rowSelection" 
                checked={selectedRow === 0} 
                onChange={() => setSelectedRow(0)} 
              />
            </div>
            <div className="table-cell">Hair Color</div>
            <div className="table-cell">1</div>
            <div className="table-cell">2512</div>
            <div className="table-cell">
              <input 
                type="checkbox" 
                checked={verifiedRows.includes(0)} 
                onChange={() => {
                  setVerifiedRows(prev => 
                    prev.includes(0) 
                      ? prev.filter(id => id !== 0) 
                      : [...prev, 0]
                  );
                }} 
              />
            </div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">
              <input 
                type="radio" 
                name="rowSelection" 
                checked={selectedRow === 1} 
                onChange={() => setSelectedRow(1)} 
              />
            </div>
            <div className="table-cell">Baby Formula</div>
            <div className="table-cell">2</div>
            <div className="table-cell">1845</div>
            <div className="table-cell">
              <input 
                type="checkbox" 
                checked={verifiedRows.includes(1)} 
                onChange={() => {
                  setVerifiedRows(prev => 
                    prev.includes(1) 
                      ? prev.filter(id => id !== 1) 
                      : [...prev, 1]
                  );
                }} 
              />
            </div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">
              <input 
                type="radio" 
                name="rowSelection" 
                checked={selectedRow === 2} 
                onChange={() => setSelectedRow(2)} 
              />
            </div>
            <div className="table-cell">Detergent</div>
            <div className="table-cell">3</div>
            <div className="table-cell">3201</div>
            <div className="table-cell">
              <input 
                type="checkbox" 
                checked={verifiedRows.includes(2)} 
                onChange={() => {
                  setVerifiedRows(prev => 
                    prev.includes(2) 
                      ? prev.filter(id => id !== 2) 
                      : [...prev, 2]
                  );
                }} 
              />
            </div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">
              <input 
                type="radio" 
                name="rowSelection" 
                checked={selectedRow === 3} 
                onChange={() => setSelectedRow(3)} 
              />
            </div>
            <div className="table-cell">Peanut Butter</div>
            <div className="table-cell">1</div>
            <div className="table-cell">1756</div>
            <div className="table-cell">
              <input 
                type="checkbox" 
                checked={verifiedRows.includes(3)} 
                onChange={() => {
                  setVerifiedRows(prev => 
                    prev.includes(3) 
                      ? prev.filter(id => id !== 3) 
                      : [...prev, 3]
                  );
                }} 
              />
            </div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">
              <input 
                type="radio" 
                name="rowSelection" 
                checked={selectedRow === 4} 
                onChange={() => setSelectedRow(4)} 
              />
            </div>
            <div className="table-cell">Hair Color Red</div>
            <div className="table-cell">2</div>
            <div className="table-cell">1932</div>
            <div className="table-cell">
              <input 
                type="checkbox" 
                checked={verifiedRows.includes(4)} 
                onChange={() => {
                  setVerifiedRows(prev => 
                    prev.includes(4) 
                      ? prev.filter(id => id !== 4) 
                      : [...prev, 4]
                  );
                }} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="images-section">
        <div className="image-container">
          <img 
            src="/image1.png" 
            alt="Time Series Anomaly Chart" 
            className="anomaly-image"
          />
        </div>
        <div className="image-container">
          <img 
            src="/image2.png" 
            alt="Anomaly Distribution Graph" 
            className="anomaly-image image2"
          />
        </div>
      </div>
    </div>
  );
}