import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => id !== tour.id);
    setTours(newTours);
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      if (!res.ok) { return };
      const data = await res.json();
      setTours(data);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("there is an error: " + error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(tours);

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={fetchData}>Refresh</button>
        </div>

      </main>);
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
}








export default App
