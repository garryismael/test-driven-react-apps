import React, { useState } from "react";
import PropTypes from "prop-types";

export const CustomerForm = ({ original, onSubmit }) => {
  const [customer, setCustomer] = useState(original);

  const handleChange = ({ target }) =>
    setCustomer((customer) => ({
      ...customer,
      [target.name]: target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={customer.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={customer.lastName}
        onChange={handleChange}
      />
      <label htmlFor="phoneNumber">Phone number</label>
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={customer.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Add"
      />
    </form>
  );
};

CustomerForm.propTypes = {
  original: PropTypes.object,
  onSubmit: PropTypes.func,
};
