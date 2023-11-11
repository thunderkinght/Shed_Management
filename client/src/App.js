// import React from "react";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1> Loco-Movement ALF Form</h1>
//      <div className="form">
//       <label>Sr.no</label>
//          <input type="integer" name="Sr.no." placeholder="Sr.no."/>
//         <label>Date</label>
//         <input type="date" name="Date" placeholder="Date"/>
//         <label>Time</label>
//         <input type="time" name="Time" placeholder="Time"/>
//         <label>Loco. no.</label>
//         <input type="integer" name="Loco. no." placeholder="Loco. no."/>
//         <label>Self/Dead</label>
//         <input type="text" name="Self/Dead" placeholder="Self/Dead"/>
//         <label>From</label>
//         <input type="text" name="From" placeholder="From"/>
//         <label>To</label>
//         <input type="text" name="To" placeholder="To"/>
//         <label>Remark</label>
//         <input type="text" name="Remark" placeholder="Remark"/>
//         <label>Work Done Time</label>
//         <input type="time" name="Work Done Time" placeholder="Work Done Time"/>
//       </div>
//       <button>Submit</button>
//     </div>

//   );
// }

// export default App;
import React, { useState } from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    "Sr.no": "",
    "Date": "",
    "Time": "",
    "Loco. no": "",
    "Self/Dead": "",
    "From": "",
    "To": "",
    "Remark": "",
    "Work Done Time": ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // Handle success, e.g., clear the form or show a success message
      } else {
        console.error('Form data submission failed');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error while submitting form data:', error);
      // Handle network errors
    }
  };

  return (
    <div className="App">
      <h1>Loco-Movement ALF Form</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Sr.no</label>
          <input type="text" name="Sr.no" value={formData["Sr.no"]} onChange={handleChange} placeholder="Sr.no" required />

          <label>Date</label>
          <input type="date" name="Date" value={formData["Date"]} onChange={handleChange} placeholder="Date" required />

          <label>Time</label>
          <input type="time" name="Time" value={formData["Time"]} onChange={handleChange} placeholder="Time" required />

          <label>Loco. no</label>
          <input type="text" name="Loco. no" value={formData["Loco. no"]} onChange={handleChange} placeholder="Loco. no" required />

          <label>Self/Dead</label>
          <input type="text" name="Self/Dead" value={formData["Self/Dead"]} onChange={handleChange} placeholder="Self/Dead" required />

          <label>From</label>
          <input type="text" name="From" value={formData["From"]} onChange={handleChange} placeholder="From" required />

          <label>To</label>
          <input type="text" name="To" value={formData["To"]} onChange={handleChange} placeholder="To" required />

          <label>Remark</label>
          <input type="text" name="Remark" value={formData["Remark"]} onChange={handleChange} placeholder="Remark" required />

          <label>Work Done Time</label>
          <input type="time" name="Work Done Time" value={formData["Work Done Time"]} onChange={handleChange} placeholder="Work Done Time" required />
          <br/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
