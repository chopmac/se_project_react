import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from "../hooks/useForm";
import "../blocks/AddItemModal.css";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem(values, () => setValues({ name: "", imageUrl: "", weather: "" }));
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      name="create"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          placeholder="Image URL"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="weather"
            value="hot"
            className="modal__radio"
            onChange={handleChange}
            checked={values.weather === "hot"}
          />{" "}
          Hot
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="weather"
            value="warm"
            className="modal__radio"
            onChange={handleChange}
            checked={values.weather === "warm"}
          />{" "}
          Warm
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="weather"
            value="cold"
            className="modal__radio"
            onChange={handleChange}
            checked={values.weather === "cold"}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
