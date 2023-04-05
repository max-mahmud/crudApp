import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Container, Form, Row } from "react-bootstrap";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get(`https://crudapp2023.onrender.com/user/${id}`);
      setInput(res.data);
    };
    getAllData();
  }, [id]);

  let name, value;
  const onValuSubmit = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleEditData = async (e) => {
    e.preventDefault();
    await axios.patch(`https://crudapp2023.onrender.com/user/${id}`, input);
    navigate("/");
  };
  return (
    <Container>
        <Row className="mt-3 ">
          <h3 className="text-center text-info">Updat Your Data</h3>
          <div className="col-md-12 ">
            <Form onSubmit={handleEditData}>
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
              <Button  className="btn btn-success" type="submit">
                Update
              </Button>
              <NavLink to={'/'} className=" mx-4 btn btn-secondary">Back To Home</NavLink>
            </Form>
          </div>
          
        </Row>
      </Container>
  )
}

export default Edit
