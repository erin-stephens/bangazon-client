import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [formInput, setFormInput] = useState({
    uid: user.uid,
    email: '',
    url: '',
    firstName: '',
    lastName: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formInput).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name="firstName" value={formInput.firstName} onChange={handleChange} required />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="lastName" value={formInput.lastName} onChange={handleChange} required />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" value={formInput.email} onChange={handleChange} required />
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name="username" value={formInput.username} onChange={handleChange} required />
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="text" placeholder="Profile Image Url" name="url" value={formInput.url} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
