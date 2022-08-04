


import { Component } from "react";
import { Container, Nav, Navbar as NavbarBS, NavDropdown} from "react-bootstrap";
import Menu from './Menu';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            navbar:'',
            menus:[
                {
                    id:"001",
                    name:"Nasi Putih",
                    price:"Rp 4000"
                },
                {
                    id:"002",
                    name:"Nasi Goreng Spesial",
                    price:"Rp 20000"
                }
            ]
        }
    }

    handleSubmitMenu=(val)=>{
        this.setState({
            menus : [...this.state.menus,val]
        })
    }

    handleNavbar=(page)=>{
        this.setState({
            navbar:page
        })
    }

    logout = () =>{
        this.props.callback()
    }
    render() {
        let viewPage='';
        if (this.state.navbar==='') {
            viewPage = <Dashboard callback={this.props.callback}/>
        } else if (this.state.navbar==='menus') {
            viewPage = <Menu menus={this.state.menus} callbackSubmitMenu={this.handleSubmitMenu}/>
        } 
        return(
            <>
            <div>
            <NavbarBS bg='dark' variant='dark' expand='lg'>
                <Container>
                    <NavbarBS.Brand href='#home'>Bahari Di Hati</NavbarBS.Brand>
                    <NavbarBS.Toggle aria-controls="basic-navbar-control"/>
                    <NavbarBS.Collapse>
                        <Nav className="me-auto">
                           {/* <Nav.Link href="#home">Home</Nav.Link>
                           <Nav.Link href="#menu">menus</Nav.Link>
                           <Nav.Link></Nav.Link> */}
                           <ul className="navbar-nav">
                             <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" onClick={() => this.handleNavbar('')}>Home</a>
                             </li>
                             <li className="nav-item">
                                <button  type="button" className="btn btn-primary" onClick={() => this.props.changePage("home")}>Home Asal</button>
                                <button  type="button" className="btn btn-primary" onClick={() => this.props.changePage("home-menu-baru")}>Home Menu Baru</button>
                                 {/* <a className="nav-link" onClick={() => this.handleNavbar('menus')}>Menus</a> */}
                             </li>
                             <li className="nav-item">
                                 <button  type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
                             </li>
                            </ul>
                        </Nav>
                    </NavbarBS.Collapse>
                </Container>
            </NavbarBS>
            </div>

            <h1>Home Menu Baru</h1>

             {/* {viewPage} */}
         </>
            // <>
            // <NavbarBS bg='dark' variant='dark' expand='lg'>
            //     <Container>
            //         <NavbarBS.Brand href='#home'>Bahari Di Hati</NavbarBS.Brand>
            //         <NavbarBS.Toggle aria-controls="basic-navbar-control"/>
            //         <NavbarBS.Collapse>
            //             <Nav className="me-auto">
            //             <Nav.Link to="/home">Home</Nav.Link>
            //             <Nav.Link onClick={() => this.handleNavbar('menus')}>menus</Nav.Link>
            //             {/* <ul className="navbar-nav">
            //                  <li className="nav-item">
            //                      <a className="nav-link active" aria-current="page" onClick={() => this.handleNavbar('')}>Home</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" onClick={() => this.handleNavbar('menus')}>Menus</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <button  type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
            //                 </li>
            //             </ul> */}
            //             </Nav>
            //         </NavbarBS.Collapse>
            //         <button  type="button" className="btn btn primary" onClick={this.logout}>Logout</button>
            //     </Container>
            // </NavbarBS>
            // {viewPage}
            // </>
            
        )
    }
}

export default Dashboard;