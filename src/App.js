import React from 'react';
import './App.css';

function App() {
  return (
    <form>
      <label> Servicename:
      <input type="text" name="sname"/>
      </label>
      <label> Namespace:
      <input type="text" name="nsname"/>
      </label><br/><br/>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default App;
