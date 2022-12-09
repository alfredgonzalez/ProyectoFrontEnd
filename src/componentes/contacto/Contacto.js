import Form from 'react-bootstrap/Form';
import "./contacto.css";

function TextControlsExample() {
  return (
    <Form className='form'>
      <Form.Group className="frmGroupEmail" controlId="exampleForm.ControlInput1">
        <Form.Label className='labelEmail'>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu mail" />
      </Form.Group>
      <Form.Group className="frmGroupMensaje" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='labelMensaje'>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;