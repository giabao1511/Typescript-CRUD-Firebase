import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ClearingData } from "../../redux/actions/action_customer";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(ClearingData());
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Gia Bao</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/add" className="nav-link">
            Add customer
          </Link>
          <Link to="/update" className="nav-link" onClick={handleUpdate}>
            Update customer
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
