import { toHaveClass } from "./toHaveClass";
import { stripTerminalColor } from "./utils";

describe("toHaveClass matcher", () => {
  it("returns pass if true when className is found in the given DOM element", () => {
    const domElement = {
      className: "toggled class",
    };
    const result = toHaveClass(domElement, "class");
    expect(result.pass).toBe(true);
  });

  it("returns pass if false when the text is not found in the given DOM element", () => {
    const domElement = {
      className: "toggled",
    };
    const result = toHaveClass(domElement, "class");
    expect(result.pass).toBe(false);
  });

  it("returns a message that contains the source line if no match", () => {
    const domElement = {
      className: "toggled",
    };
    const result = toHaveClass(domElement, "class");

    expect(stripTerminalColor(result.message())).toContain(
      `expect(element).toHaveClass("class")`
    );
  });

  it("returns a message that contains the source line if negated match", () => {
    const domElement = {
      className: "toggled",
    };
    const result = toHaveClass(domElement, "toggled");
    expect(stripTerminalColor(result.message())).toContain(
      `expect(element).not.toHaveClass("toggled")`
    );
  });

  it("returns a message that contains the actual className value", () => {
    const domElement = {
      className: "toggled",
    };
    const result = toHaveClass(domElement, "toggled");
    expect(stripTerminalColor(result.message())).toContain(
      `Actual class: "toggled"`
    );
  });
});
