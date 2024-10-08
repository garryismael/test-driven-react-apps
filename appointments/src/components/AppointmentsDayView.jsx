import React from "react";
import { appointmentTimeOfDay } from "@/utils";
import { Appointment } from "./Appointment";
import { useState } from "react";
import PropTypes from "prop-types";

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button
              type="button"
              onClick={() => setSelectedAppointment(i)}
              className={`${selectedAppointment === i ? "toggled" : ""}`}
            >
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};

AppointmentsDayView.propTypes = {
  appointments: PropTypes.array
}