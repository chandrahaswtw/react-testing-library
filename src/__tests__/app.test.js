import { render } from "@testing-library/react";
import App from "./../App";

describe("Testing app component", () => {
  render(<App></App>);
  // We need to write all the tests, but we can avoid as it's the root component and we can test individual components.
});
