import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

export const toHaveClass = (received, expectedText) => {
  const pass = received.className.split(" ").includes(expectedText);
  const sourceHint = () =>
    matcherHint("toHaveClass", "element", printExpected(expectedText), {
      isNot: pass,
    });

  const actualTextHint = () =>
    "Actual class: " + printReceived(received.className);
  const message = () => [sourceHint(), actualTextHint()].join("\n\n");
  return { pass, message };
};
