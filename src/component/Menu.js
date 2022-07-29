import { Component } from "react";

import FormMenu from "./FormMenu";
import ListMenu from "./ListMenu";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            Value:false
        }
    };

    changeValue=()=>{
        this.setState({
            Value:true
        })
    }
    
    handleSubmit=(val)=>{
        this.setState({
            Value:false,
        })
        this.props.callbackSubmitMenu(val)
    }

    handleCancel = () => {
        this.setState({
          Value: false,
        })
    }

    render(){
        return(
            <>
            {this.state.Value ? <FormMenu submitMenu = {this.handleSubmit} cancelMenu = {this.handleCancel}/> :
        <ListMenu menus={this.props.menus} valueCallback = {this.changeValue}/>}

            </>
        );
    }
}


export default Menu;




