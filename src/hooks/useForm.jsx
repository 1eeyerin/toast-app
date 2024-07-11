import { useState } from "react";

const useForm = ({ resolver, handler }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    let error = "";

    if (resolver) {
      error = resolver(formValues);
    }

    if (error) {
      alert(error);
      return;
    }

    handler(formValues);
  };

  return {
    handleSubmit,
  };
};

export default useForm;
