import React from 'react';
import { Form } from 'react-bootstrap';
import './CustomStyles.css'; // Import the CSS file with the custom style

const CustomInput = () => {
  return (
    <Form.Group className="custom-outline">
      <Form.Control type="text" placeholder="Enter text" onChange={()=>{
        
      }}/>
    </Form.Group>
  );
};

export default CustomInput;