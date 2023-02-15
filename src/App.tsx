import logo from "./logo.svg";
import "./App.css";
import { Default } from "./components/form";

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Default></Default>
        </div>
      </header>
    </div>
  );
};
