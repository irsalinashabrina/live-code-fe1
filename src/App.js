import logo from './logo.svg';
import './App.css';
import LoginComponentFunc from './component/LoginComponentFunc';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './component/LoginComponent';
import Dulu from './component/dulu';
import LoginBaru from './component/LoginBaru';
import { Component } from 'react';
import Dashboard from './component/Home';
// import Home from './component/Home';
import HomeMenuBaru from './component/HomeMenuBaru';


class App extends Component{
  constructor(props){
    
    super(props)
    this.state = {
     logged : false,
     page: "login",
    }
  }
  
  login = (params) => {
    if(params.email === "admin@example.com" && params.password === "12345678"){
    this.setState({
      logged: true,
      page: "home",
    })
  }else{
    alert("Incorrect email or password")
  }
  }
  
  logout = () => {
    this.setState({
      logged : false,
      page: "login",
    })
  }

  changePage = (page) => {
    this.setState({
      logged : true,
      page: page,
    })
  }

  returnPage = () => {
    if (this.state.logged) {
      switch(this.state.page) {
        case "home":
          return <Dashboard callback={this.logout} changePage={this.changePage}/>;   
        case "home-menu-baru":
          return <HomeMenuBaru callback={this.logout} changePage={this.changePage}/>;
        default:
          return <LoginBaru callback={this.login}/>;
      }
    }  else {
      return <LoginBaru callback={this.login}/>;
    }
  }
  
  
  render(){
  
    return(
      <div>
        {/* <HomeMenuBaru></HomeMenuBaru> */}
        { 
          this.returnPage()
        }
        {/* LoginBaru */}
      </div>
    );
  }
  
  }
  
  export default App;