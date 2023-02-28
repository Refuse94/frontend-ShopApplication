import "./App.css";
import { NavBar } from "./components/navBar";
import { NewProduct } from "./components/form";
import { Filter } from "./components/filter";
import { BestSales } from "./components/bestSales";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import { useFetch } from "./functions/useFetch"; */

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
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/newProduct">
              <NewProduct></NewProduct>
            </Route>
            <Route path="/filter">
              <br />
              <br />
              <br />
              <Filter></Filter>
            </Route>
            <Route path="/bestSales">
              <br />
              <br />
              <br />
              <BestSales></BestSales>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};
