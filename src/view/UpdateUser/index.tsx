import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../../layout/Navbar";
import {
  ClearingData,
  UpdateCustomerInitiate,
} from "../../redux/actions/action_customer";
import { RootState } from "../../redux/root-reducer";

const UpdateUser = () => {
  const customer = useSelector((state: RootState) => state.customer.customer);

  console.log(customer);

  const [id, setID] = useState<undefined | string>(customer?.id || "");
  const [name, setName] = useState<undefined | string>(customer?.name || "");
  const [email, setEmail] = useState<undefined | string>(customer?.email || "");
  const [contact, setContact] = useState<undefined | string>(
    customer?.contact || ""
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ClearingData());
    dispatch(UpdateCustomerInitiate({ id, name, email, contact }));
    navigate("/");
  };

  useEffect(() => {
    if (customer) {
      setID(customer?.id);
      setName(customer?.name);
      setEmail(customer?.email);
      setContact(customer?.contact);
    }
  }, [customer]);

  useEffect(() => {
    return () => {
      dispatch(ClearingData());
    };
  }, [dispatch]);

  return (
    <>
      <MyNavbar />
      <Container>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID"
              defaultValue={id}
              onChange={(e) => setID(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              defaultValue={contact}
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

export default UpdateUser;
