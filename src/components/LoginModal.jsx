import React, { useEffect } from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from "../hooks/useForm";

function LoginModal({ isOpen, onClose, onLogin, switchToRegister }) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({
        email: "",
        password: "",
      });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <ModalWithForm
      title="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <div className="modal__submit-container">
        <button type="submit" className="modal__submit">
          Log in
        </button>
        <button 
          type="button" 
          className="modal__or-button" 
          onClick={switchToRegister}
        >
          or Sign up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;