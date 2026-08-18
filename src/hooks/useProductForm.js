import { useState } from "react";

function useProductForm() {
  //Form state.
  const [form, setForm] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
    stock: ""
  });
  // Function to handle changes in the inputs.
  function handleChange(evt) {
    const { name, value } = evt.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }
  //Form validation function.
  function validateForm() {
    if (
      form.name === "" || form.description === "" || form.origin === ""
    ) {
      return "Please fill in the fields!";
    }

    if (Number(form.price) < 0 || Number(form.stock) < 0) {
      return "Price or stock is Invalid!";
    }
    return null;
  }
  // Resetting the form to its initial state
  function resetForm() {
    setForm({
      name: "",
      description: "",
      origin: "",
      price: "",
      stock: ""
    });
  }

  return {
    form,
    handleChange,
    validateForm,
    resetForm
  };
}

export default useProductForm;