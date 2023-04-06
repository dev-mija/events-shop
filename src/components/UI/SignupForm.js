import React, { useState } from 'react';
import Input from './Input';
import Card from './Card';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formValidity, setFormValidity] = useState({
    name: true,
    email: true,
    password: true,
    confirmPassword: true
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleInputBlur = e => {
    const { name, value } = e.target;
    let isValid = true;

    if (name === 'email') {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === 'password') {
      isValid = value.length >= 6;
    } else if (name === 'confirmPassword') {
      isValid = value === formData.password;
    }

    setFormValidity(prevState => ({
      ...prevState,
      [name]: isValid
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); // replace with actual form submission logic
  };

  return (
    <Card>
    <form onSubmit={handleSubmit}>
      <Input
        label="Name:"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        isValid={formValidity.name}
      />
      <Input
        label="Email:"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        isValid={formValidity.email}
      />
      <Input
        label="Password:"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        isValid={formValidity.password}
      />
      <Input
        label="Confirm Password:"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        isValid={formValidity.confirmPassword}
      />
      <button type="submit">Sign Up</button>
    </form>
    </Card>
  );
}

export default SignupForm;
