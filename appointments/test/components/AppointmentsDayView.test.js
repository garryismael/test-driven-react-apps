import React from "react";
import { AppointmentsDayView } from "@/components/AppointmentsDayView";
import {
  click,
  element,
  elements,
  initializeReactContainer,
  render,
  textOf,
  typesOf,
} from "../reactTestExtensions";

describe("AppointmentsDayView", () => {
  const today = new Date();
  const twoAppointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: {
        firstName: "Ashley",
        lastName: "Young",
        phoneNumber: "123456789",
      },
      stylist: "Sam",
    },
    {
      startsAt: today.setHours(13, 0),
      customer: {
        firstName: "Jordan",
        lastName: "Michael",
        phoneNumber: "334543781",
      },
      stylist: "Xoxo",
    },
  ];

  beforeEach(() => {
    initializeReactContainer();
  });

  const secondButton = () => elements("button")[1];

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(element("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(element("ol")).not.toBeNull();
  });

  it("renders an li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(elements("ol > li")).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(textOf(elements("li"))).toEqual(["12:00", "13:00"]);
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.body).toContainText(
      "There are no appointments scheduled for today"
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(document.body).toContainText("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(typesOf(elements("li > *"))).toEqual(["button", "button"]);
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    click(secondButton());
    expect(document.body).toContainText("Jordan");
  });

  it("adds toggled class to button when selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    click(elements("button")[0]);
    expect(elements("button")[0]).toHaveClass("toggled");
  });

  it("does not add toggled class if button is not selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(secondButton()).not.toHaveClass("toggled");
  });
});
