import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../../layout/Navbar";
import { CreateCustomerInitiate } from "../../redux/actions/action_customer";

const AddUser = () => {
  const [name, setName] = useState<undefined | string>(undefined);
  const [email, setEmail] = useState<undefined | string>(undefined);
  const [contact, setContact] = useState<undefined | string>(undefined);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(CreateCustomerInitiate({ name, email, contact }));
    navigate("/");
  };
  return (
    <>
      <MyNavbar />
      <Container>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddUser;
