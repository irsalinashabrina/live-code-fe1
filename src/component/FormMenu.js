import { Component } from "react";
import { Container } from "react-bootstrap";

class FormMenu extends Component{
    constructor(props){
        this.state={
            id:'',
            menu:'',
            price:'',
        }
    }

    handleChangeId=(val)=>{
        this.setState({
            id:val.target.value,
        })
    }

    
  handleChangeMenu = (val) => {
    this.setState({
        menu: val.target.value,
    })
  }

  handleChangePrice = (val) => {
    this.setState({
        price: val.target.value,
    })
  }

  handleSubmit = (val) => {
      this.props.submitMenu(this.state)
      val.preventDefault()
  }

  handleCancel = () => {
      this.props.cancelMenu()
  }

  render(){
    return(
        <div>
            <Container>
                <form>
                    <label htmlFor="inputId">id</label>
                    <input type='text' placeholder='enter id' onChange={this.handleChangeId}/>
                    <label htmlFor="inputMenu">Menu</label>
                    <input type='text' placeholder='enter menu' onChange={this.handleChangeMenu}/>
                    <label htmlFor="inputPrice">Price</label>
                    <input type='text' placeholder='enter price' onChange={this.handleChangePrice}/>
                    <br/>
                    <button  type="button" className="btn btn primary" onClick={this.handleCancel}>Cancel</button>
                    <button  type="submit" className="btn btn primary" onClick={this.handleSubmit}>submit</button>
                </form>
            </Container>
        </div>
    );
  }
}

export default FormMenu;

