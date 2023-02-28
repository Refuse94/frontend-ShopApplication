import "./App.css";
import { Default } from "./components/default";
import { NewProduct } from "./components/form";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useFetch } from "./functions/useFetch";

export const App: React.FC = () => {
  /*const {
    data: blogs,
    isPending: loadingBlogs,
    error: errorBlogs,
  } = useFetch<Blog[]>("http://localhost:5000/blogs/");
  const {
    data: authors,
    isPending: loadingAuthors,
    error: errorAuthors,
  } = useFetch<Author[]>("http://localhost:5000/authors");

  */

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Default></Default>
          <Switch>
            <Route exact path="/">
              <NewProduct></NewProduct>
            </Route>
            <Route path="/create"></Route>
            <Route path="/blogs/:id"></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};
