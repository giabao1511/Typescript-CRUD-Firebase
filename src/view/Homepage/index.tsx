import { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../../layout/Navbar";
import {
  ClearingData,
  DeleteCustomerInitiate,
  GetAllCustomerInitiate,
  GetCustomerInitiate,
} from "../../redux/actions/action_customer";
import { RootState } from "../../redux/root-reducer";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customerList = useSelector(
    (state: RootState) => state.customer.customers
  );

  const navigateEdit = (id: string) => {
    dispatch(GetCustomerInitiate(id));
    navigate("/update");
  };

  const handleRemove = (id: string) => {
    dispatch(DeleteCustomerInitiate(id));
  };

  useEffect(() => {
    dispatch(GetAllCustomerInitiate());
    dispatch(ClearingData());
  }, [dispatch]);

  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customerList?.map((item: any, index: any) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.status === 1 ? "Online" : "Offline"}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => navigateEdit(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Homepage;
