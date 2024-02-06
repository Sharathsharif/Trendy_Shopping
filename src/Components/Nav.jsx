import { Form, Navbar, NavbarBrand, Button, NavDropdown } from "react-bootstrap";
import './CSS/NavbarContent.css';

export default function Navbarcontent() {
  return (
    <Navbar className="bg-body-tertiary d-flex justify-content-between" sticky="top">
      <div className="nav-item-flex">
        <NavbarBrand className="text-success">
          TRENDY <i className="bi bi-cart4"></i> Shopping
        </NavbarBrand>
      </div>

      <div className="nav-item-flex">
        <Form className="d-flex">
          <Form.Control type="text" placeholder="What you want ?     " className="me-2" />
          <Button type="submit" className="navSearchbtn" >
            <i className="bi bi-search"></i>
          </Button>
        </Form>
      </div>
      
      <div className="nav-item-flex">
      <i className="bi bi-cart-fill"></i>
      
              <NavDropdown title="Cart" id="basic-nav-dropdown">
          {/* <NavDropdown.Item href="#action/3.1">Mens</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Womans</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item> */}
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Go to Cart </NavDropdown.Item>
        </NavDropdown>
      </div>

      <div className="nav-item-flex">
        <NavDropdown title="Category" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mens</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Womans</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Shoes</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Navbar>
  );
}
