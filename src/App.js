import './App.css';

import { getCurrentIssLocation } from './api/IssNow'
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import MapComponent from './components/MapComponent';

function App() {

  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchApi(){
      const data = await getCurrentIssLocation();
      setLocation(data);
    }
    fetchApi();
    setIsLoading(false);
    const interval = setInterval(fetchApi, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
      <h1>Where ISS?</h1>
      {isLoading && <ClipLoader />}
      {!isLoading &&
        <>
          <MapComponent markerLocation={ location }></MapComponent>
        </>
      }
    </div>
  );
}

export default App;
