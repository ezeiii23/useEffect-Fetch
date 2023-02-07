import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [activity, setActivity] = useState("");

  const fetchActivity = () => {
    Axios.get("https://www.boredapi.com/api/activity").then((res) => {
      setActivity(res.data.activity);
    });
  };

  useEffect(() => {
    return () => {
      fetch(fetchActivity);
    };
  }, []);

  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");

  const fetchJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => {
      setJoke(res.data.setup);
      setPunchline(res.data.punchline);
    });
  };

  useEffect(() => {
    return () => {
      fetch(fetchJoke);
    };
  }, []);
  return (
    <div className="App">
      <div className="card">
        <button onClick={fetchActivity}>Generate Random Activity</button>
        <p>{activity}</p>
      </div>

      <div className="card">
        <button onClick={fetchJoke}>Generate Random Joke</button>
        <p>{joke}</p>
        <h2>{punchline}</h2>
      </div>
    </div>
    
  );
}

export default App;

//fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
//.then((data) => {
//  console.log(data);
//});
