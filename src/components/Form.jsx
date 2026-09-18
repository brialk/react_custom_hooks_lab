import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'; 

function RepairForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [serviceNumber, setServiceNumber] = useLocalStorage('serviceNumber', '');

  return (
    <div className="ui segment container">
      <form className="ui form">
        <h2>Repair Intake</h2>
        
        <div className="field">
          <label>Customer Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // FIX: This allows your test engine to locate the element
            data-testid="name" 
            required
          />
        </div>

        <div className="field">
          <label>Service Number</label>
          <input
            type="text"
            placeholder="Enter service number"
            value={serviceNumber}
            onChange={(e) => setServiceNumber(e.target.value)}
            // FIX: Adding this handles the other required key element path mapping
            data-testid="serviceNumber" 
            required
          />
        </div>
      </form>
    </div>
  );
}

export default RepairForm;
