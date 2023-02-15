import logo from "./logo.svg";
import "./App.css";
import { Default } from "./components/default";
import { NewBlog } from "./components/form";

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
