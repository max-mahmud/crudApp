import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
  });
  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get("https://crudapp2023.onrender.com/user/");
      setUsers(res.data);
    };
    getAllData();
  }, [render]);
// Create User
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://crudapp2023.onrender.com/user/", input);
    setRender(true);
    setInput({
      name: "",
      email: "",
      age: "",
    });
  };
  let name, value;
  const onValuSubmit = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };
//   DeleteUser
  const handelDelete = async (id) => {
    await axios.delete(`https://crudapp2023.onrender.com/user/${id}`);
    const newUsers = users.filter((item) => {
      return item._id !== id;
    });
    setUsers(newUsers);
  };
  return (
    <>
      <Container>
        <Row className="mt-3 ">
          <div className="col-md-6 ">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={input.name}
                  onChange={onValuSubmit}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  onChange={onValuSubmit}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Age"
                  name="age"
                  value={input.age}
                  onChange={onValuSubmit}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          <div className="col-md-6">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((users) => {
                    return (
                      <tr key={users._id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.age}</td>
                        <td>
                          <NavLink
                            to={`/edit/${users._id}`}
                            className="btn btn-warning "
                          >
                            Edit
                          </NavLink>
                        </td>
                        <td>
                          <Button
                            onClick={() => handelDelete(users._id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
