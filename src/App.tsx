import "./App.css";
import UserLibrary from "./components/UserLibrary/UserLibrary";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster />
      <UserLibrary />
    </div>
  );
}

export default App;
