import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Views/About'
import Home from './Views/Home'
import ContactUs from "./Views/ContactUs"

function App() {
  return (
    <div>
      <Router>

      <Header />

      <div className="p-3"> 
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </div>

      <Footer />

      </Router>

    </div>
  );
}

export default App;
