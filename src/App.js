import React from 'react';
import Navbar from './components/Navbar';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './components/Form.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Explore from './components/pages/Explore';
import SignUp from './components/pages/SignUp';
import BookFlight from './components/pages/BookFlight';
import Footer from './components/Footer';
import Form from './components/Form';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
      
      <Switch>
        <Route  exact path='/'  component={Home} />
         <Route  path='/about'  component={About} /> 
        {/* <Route path='/explore'  component={Explore} /> */}
        <Route path='/signup'  component={SignUp} />
        <Route path='/book' component={BookFlight} />
        <Route path='/signup'  component={Form} />
        {/* <Route component={Error} /> */}
        </Switch>  
        <Footer/>
        </Router>
           
    </>
    
  );
}

export default App;
