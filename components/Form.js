import React, { useState } from 'react';

const Form = () => {
  const [numFloors, setNumFloors] = useState(5);
  const handleSubmit = event => {
    event.preventDefault();
    // handle form submission here
    console.log(numFloors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="numFloors">Number of Floors</label>
      <input
        type="numFloors"
        id="numFloors"
        value={numFloors}
        onChange={e => setNumFloors(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;