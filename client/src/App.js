import { BrowserRouter as Router } from "react-router-dom";
import Root from "./Components/Root";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProjects } from "./api/project";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProjects((err, res) => {
      if (err) return console.log(err);
      dispatch({ type: "FETCH_ALL_PROJECTS", payload: res.data });
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Root />
      </Router>
    </div>
  );
}

export default App;

// filter  blur
