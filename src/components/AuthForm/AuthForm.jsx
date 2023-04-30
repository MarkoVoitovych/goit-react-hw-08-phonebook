import { useState } from 'react';
import { Button, Form, Input, Label } from './AuthForm.styled';

function AuthForm({ options = [], initialValues = {}, onSubmit, buttonTitle }) {
  const [form, setForm] = useState(initialValues);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(form);
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {options.map(({ label, name, type, placeholder }) => (
        <Label key={name}>
          <Input
            type={type}
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={placeholder}
            required
            label={label}
            variant="standard"
          />
        </Label>
      ))}
      <Button type="submit">{buttonTitle}</Button>
    </Form>
  );
}

export default AuthForm;
