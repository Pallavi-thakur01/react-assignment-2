import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import JsoninforDisplay from "./pages/Appointment";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import { useState } from "react";
import Buttons from "./components/Button";
import CardComponent from "./components/Card";

function App() {
  const [data, setdata] = useState([]);
  const [record, setrecord] = useState([]);
  const [show, setShow] = useState(false);

  //modal states
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  function onchangeHandler(e) {
    const { name, value } = e.target;
    const image = name === "pic" && e.target.files[0];
    setdata(() => {
      return {
        ...data,
        [name]: name === "pic" ? window.URL.createObjectURL(image) : value,
      };
    });
  }

  function submit(e) {
    e.preventDefault();
    setrecord([...record, data]);
  }

  function deleteItem(id) {
    const task = [...record];
    task.splice(id, 1);
    setrecord(task);
  }

  return (
    <div className="App">
      <>
        <h1 style={{ marginTop: "100px", marginBottom: "30px" }}>
          Appointment Card
          <Button
            style={{ marginLeft: "30px" }}
            variant="primary"
            onClick={handleShow}
          >
            Add
          </Button>
        </h1>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Enter Appointment Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridname">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    onChange={onchangeHandler}
                    name="name"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Age"
                    // value={age}
                    name="age"
                    onChange={onchangeHandler}
                    required
                  />
                </Form.Group>
                <Row>
                  <Form.Group as={Col} controlId="formFile">
                    <Form.Label>Choose Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="pic"
                      // accept="image/*"
                      placeholder="Choose Pic"
                      onChange={onchangeHandler}
                     
                    />
                  </Form.Group>
                </Row>
              </Row>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={2} required>
                    Gender
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      id="formHorizontalRadios1"
                      onChange={onchangeHandler}
                    />
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      id="formHorizontalRadios2"
                      onChange={onchangeHandler}
                    />
                  </Col>
                </Form.Group>
              </fieldset>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  placeholder="+91"
                  name="contact"
                  onChange={onchangeHandler}
                  required
                />
              </Form.Group>

              <Row className="mb-3">
                <Col>
                <Form.Label>Date</Form.Label>
                <Form.Group  controlId="duedate">
                  <Form.Control
                    type="date"
                    name="duedate"
                    placeholder="Due date"
                    // value={date}
                    onChange={onchangeHandler}
                    required
                  />
                </Form.Group>
                   </Col>
                   <Col>
                <Form.Group  controlId="formGridState">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    className="modalTextField"
                    style={{ paddingRight: "6px" }}
                    name="time"
                    onChange={onchangeHandler}
                    required
                  />
                </Form.Group>
                </Col>
              </Row>
              <Buttons  text="ADD" class="btn btn-primary my-1" type="submit" htmlType="primary" onClick={handleClose}>
                
              </Buttons>
            </Form>
          </Modal.Body>
        </Modal>

        <JsoninforDisplay />
        <div class="container">
          <div class="row">
            {record.map((info, index) => {
              return (
                 <CardComponent
                  imgSrc={info.pic}
                  imgAlt="Card Image"
                  title={info.name}
                  description={info.age}
                  text={info.gender}
                  onClick={() => deleteItem(index)}
                  content={info.contact}
                  context={info.time}
                  link={info.duedate}
                />
               
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
