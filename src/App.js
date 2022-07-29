import logo from './logo.svg';
import './App.css';
import LoginComponentFunc from './component/LoginComponentFunc';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './component/LoginComponent';
import Dulu from './component/dulu';
import LoginBaru from './component/LoginBaru';
import { Component } from 'react';
import Dashboard from './component/Home';
import Home from './component/Home';


class App extends Component{
  constructor(props){
    
    super(props)
    this.state = {
     logged : false
    }
  }
  
  login = (params) => {
    if(params.email === "admin@example.com" && params.password === "12345678"){
    this.setState({
      logged: true
    })
  }else{
    alert("Incorrect email or password")
  }
  }
  
  logout = () => {
    this.setState({
      logged : false
    })
  }
  
  
  render(){
  
    return(
      <div>
        {this.state.logged ? <Dashboard callback={this.logout}/> : <LoginBaru callback={this.login}/>}
      </div>
    );
  }
  
  }
  
  export default App;