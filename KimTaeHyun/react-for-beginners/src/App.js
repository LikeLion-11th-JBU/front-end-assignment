import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie" element={<Detail />}>
          <Detail />
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;