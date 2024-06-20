import "./App.css";
import Details from "./components/Details";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
