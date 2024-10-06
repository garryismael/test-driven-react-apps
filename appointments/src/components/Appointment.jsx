import { appointmentTimeOfDay } from "@/utils";
import PropTypes from "prop-types";
import React from "react";

export const Appointment = ({
  customer,
  stylist,
  service,
  notes,
  startsAt,
}) => (
  <div id="appointmentView">
    <h3>Today&rsquo;s appointment at {appointmentTimeOfDay(startsAt)}</h3>
    <table>
      <tbody>
        <tr>
          <td>Customer</td>
          <td>
            {customer.firstName} {customer.lastName}
          </td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td>{customer.phoneNumber}</td>
        </tr>
        <tr>
          <td>Stylist</td>
          <td>{stylist}</td>
        </tr>
        <tr>
          <td>Service</td>
          <td>{service}</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>{notes}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

Appointment.propTypes = {
  customer: PropTypes.object,
  stylist: PropTypes.string,
  service: PropTypes.string,
  notes: PropTypes.string,
  startsAt: PropTypes.number,
};
