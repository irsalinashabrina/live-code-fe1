import { Component } from "react";
import { Container, Navbar } from "react-bootstrap";


class ListMenu extends Component{
    constructor(props){
        super(props)
        this.state={}

    }

    render(){
        return(
            <div>
                <Container>
                 <button  type="button" className="btn btn primary" onClick={this.valueCallback}>Add Menu</button>
                 <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.menus.map((menu,key)=>{
                                return <tr key={menu.id}>
                                    <th>{key+1}</th>
                                    <td>{menu.name}</td>
                                    <td>{menu.price}</td>
                                </tr>
                            })
                        }
                    </tbody>
                 </table>
            </Container>
                
            </div>


        );
    }
}

export default ListMenu;