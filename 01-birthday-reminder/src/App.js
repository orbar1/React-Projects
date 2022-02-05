import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);

  const clearPeopleList=()=>{
    setPeople([])
  }

  return (
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={clearPeopleList}>Clear All</button>
    </section>
  );
}

export default App;
