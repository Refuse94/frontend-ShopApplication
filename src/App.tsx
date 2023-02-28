import "./App.css";
import { Default } from "./components/default";
import { NewBlog } from "./components/form";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useFetch } from "./functions/useFetch";

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Default></Default>
          <NewBlog></NewBlog>
        </div>
      </header>
    </div>
  );
};
