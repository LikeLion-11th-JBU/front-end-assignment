import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = createBrowserRouter([
  {
  path: "/",
  element: <Home />,
  },
  {
  path: "/movie/:id",  // :id 는 1 , 2, 3, 4, 5, 6 등을 숫자로 보낼수있음 이거때문에 movie.js components id가 필요함.
  element: <Detail />,
  },
  ],
  {basename:process.env.PUBLIC_URL}
  );
  
  export default App;
  