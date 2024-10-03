import React from "react";
import { Appointment } from "@/components/Appointment";
import { element, initializeReactContainer, render } from "../reactTestExtensions";

describe("Appointment", () => {
  const blankCustomer = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  beforeEach(() => {
    initializeReactContainer();
  });

  const appointmentTable = () =>
    element("#appointmentView > table");

  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(document.body).toContainText("Ashley");
  });

  it("renders another customer first name", () => {
    const customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(document.body).toContainText("Jordan");
  });

  it("renders the costumer's last name", () => {
    const customer = { lastName: "Young" };
    render(<Appointment customer={customer} />);
    expect(appointmentTable()).toContainText("Young");
  });

  it("renders another customer's last name", () => {
    const customer = { lastName: "Michael" };
    render(<Appointment customer={customer} />);
    expect(appointmentTable()).toContainText("Michael");
  });

  it("renders customer's phone number", () => {
    const customer = { phoneNumber: "123456789" };
    render(<Appointment customer={customer} />);
    expect(appointmentTable()).toContainText("123456789");
  });

  it("renders another customer's phone number", () => {
    const customer = { phoneNumber: "334543781" };
    render(<Appointment customer={customer} />);
    expect(appointmentTable()).toContainText("334543781");
  });

  it("renders stylist name", () => {
    render(
      <Appointment
        customer={blankCustomer}
        stylist="Sam"
      />
    );
    expect(appointmentTable()).toContainText("Sam");
  });

  it("renders another stylist name", () => {
    render(
      <Appointment
        customer={blankCustomer}
        stylist="Jo"
      />
    );
    expect(appointmentTable()).toContainText("Jo");
  });

  it("renders the salon service", () => {
    render(
      <Appointment
        customer={blankCustomer}
        stylist=""
        service="Cut"
      />
    );
    expect(appointmentTable()).toContainText("Cut");
  });

  it("renders another salon service", () => {
    render(
      <Appointment
        customer={blankCustomer}
        stylist=""
        service="Blow-dry"
      />
    );
    expect(appointmentTable()).toContainText("Blow-dry");
  });

  it("renders appointments notes", () => {
    render(
      <Appointment
        customer={blankCustomer}
        stylist=""
        service="Blow-dry"
        notes="Def"
      />
    );
    expect(appointmentTable()).toContainText("Def");
  });

  it("renders another appointments notes", () => {
    render(
      <Appointment
        customer={blankCustomer}
        stylist=""
        service="Blow-dry"
        notes="A B C"
      />
    );
    expect(appointmentTable()).toContainText("A B C");
  });

  it("renders a h3 element", () => {
    render(
      <Appointment
        customer={blankCustomer}
        stylist=""
        service="Blow-dry"
        notes="A B C"
      />
    );
    expect(element("h3")).not.toBeNull();
  });

  it("renders the time as heading", () => {
    const today = new Date();
    const timestamp = today.setHours(9, 0, 0);
    render(
      <Appointment
        customer={blankCustomer}
        stylist=""
        service=""
        notes=""
        startsAt={timestamp}
      />
    );
    expect(element("h3")).toContainText(
      "Today’s appointment at 09:00"
    );
  });

  it("renders another time as heading", () => {
    const today = new Date();
    const timestamp = today.setHours(8, 0, 0);
    render(
      <Appointment
        customer={blankCustomer}
        stylist=""
        service=""
        notes=""
        startsAt={timestamp}
      />
    );
    expect(element("h3")).toContainText(
      "Today’s appointment at 08:00"
    );
  });
});
