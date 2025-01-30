import { BrowserRouter } from "react-router-dom";
import { Home } from "./app/pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
