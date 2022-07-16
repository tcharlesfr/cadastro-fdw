import { useState } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//Modal for update
function Example({ val, update, updateEmployee}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          update
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="nome"
                  autoFocus
                  onChange = {(e) => {
                    update.id = val;
                    update.nome = e.target.value;
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="sexo"
                  onChange = {(e) => {
                    update.sexo = e.target.value;
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="idade"
                  onChange = {(e) => {
                    update.idade = e.target.value;
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="endereço"
                  onChange = {(e) => {
                    update.endereco = e.target.value;
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="salario"
                  onChange = {(e) => {
                    update.salario = e.target.value;
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              fechar
            </Button>
            <Button variant="primary" onClick={updateEmployee}>
              Atualizar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Example;