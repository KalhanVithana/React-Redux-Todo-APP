import logo from './logo.svg';
import './App.css';
import RegisterUser from './Components/RegisterUser';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UpdateUser from './Components/UpdateUser';


function App() {


  return (
    <div className="App">
      <h1>hello</h1>
    
      <Router>
      




 


   
   
      <Switch>
    
     

                
                  <Route  exact  path='/' component={RegisterUser}/>
                  <Route    path='/edit/:id' component={UpdateUser}/>
                  </Switch>
                  </Router>
    </div>
  );
}

export default App;
