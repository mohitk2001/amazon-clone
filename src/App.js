import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvide";
import { auth } from "./Components/Firebase";
function App() {
  const [{user},dispatch]=useStateValue()
  console.log(user)
  //piece of code which runs on given condition
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      //user logged in
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else{
      //user logged out
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
    return ()=>{
      //cleanup 
      unsubscribe()
    }
  })
   
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Header /> 
          <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header />
          <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
