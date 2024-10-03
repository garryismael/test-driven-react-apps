import React from "react";
import { AppointmentsDayView } from "@/components/AppointmentsDayView";
import { sampleAppointments } from "@/data/sampleData";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppointmentsDayView appointments={sampleAppointments} />
);
