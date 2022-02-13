import React, {useEffect} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {useSelector, useDispatch} from "react-redux"
// import { LoginAction } from "../State/actions-creator";



const MenuBar = () => {

//   const dispatch = useDispatch()
//   const amount = useSelector(state =>state.amount)
//   const logoutData= useSelector(state=>state.LoginReducer)
//   // console.log("logout", logoutData);

//   useEffect(() => {
//     console.log('logoutData ', logoutData);
//   }, [amount]);
  

  return (
    <div>
      <Navbar bg="success" variant="danger">
        <Container>
          <Navbar.Brand as={Link} to="/">Revolution Software services  </Navbar.Brand>
         
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact"> Contact</Nav.Link>
            <Nav.Link as={Link} to="#"> About</Nav.Link>
            <Nav.Link as={Link} to="#"> Carrier</Nav.Link>
            <Nav.Link as={Link} to="#"> Others</Nav.Link>
          </Nav>
          {/* <Button variant="dark">Your Balance:{amount}</Button>
          <Button variant="secondary" onClick={()=>{dispatch(LoginAction({username:"", password:""}))}}>Log Out</Button> */}


        </Container>
      </Navbar>



    </div>
  )
}

export default MenuBar;