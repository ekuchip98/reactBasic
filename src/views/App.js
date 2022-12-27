import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListTodoComponent from "./Todos/ListTodoComponent";
import MyComponent from "./Example/MyComponent";
import NavComponent from "./Nav/NavComponent";
import HomeComponent from "./Example/HomeComponent";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavComponent />
          <Switch>
            <Route path="/" exact>
              <HomeComponent />
            </Route>
            <Route path="/todo">
              <ListTodoComponent />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
