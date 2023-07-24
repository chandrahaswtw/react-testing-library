import UserList from "./../../UserDetails/UserList/UserList";
import { screen, render, within } from "@testing-library/react";

/* 
NOTE: 
- Whenever we want to render the component multiple times, just make it as function.
- Make sure to call this is every test where you want to render, so that we get a fresh screen.
- Don't use beforeEach as it's not the best place to render a component.

function renderComponent() {
  const users = [
    { name: "jest", email: "jest@test.com" },
    { name: "react", email: "react@test.com" },
  ];
  render(<UserList users={users}></UserList>);
}
*/

describe("UserList test cases", () => {
  /*
      The roles for table are as below:
      thead -> rowgroup
      tbody -> rowgroup
      tr -> row
      th -> columnheader
      td -> cell

      The tr in thead and tr in tbody has the same role --> "row". Now we get a count 3 instead of 2.
      Also thead and tbody has same role as well.

      Sometimes finding right role doesn't work. There are 2 ways to tackle this
    */

  it("should render one row per user - data-testid approach", () => {
    /* Way 1
        - Add data-testid to the HTML element: <tbody data-testid="userListTesting">{allUsers}</tbody>
        - Not a great approach as we are adding directly to HTML
    */
    const users = [
      { name: "jest", email: "jest@test.com" },
      { name: "react", email: "react@test.com" },
    ];
    render(<UserList users={users}></UserList>);

    const rows = within(screen.getByTestId("userListTesting")).getAllByRole(
      "row"
    );
    expect(rows).toHaveLength(2);
  });

  it("should render one row per user - container approach", () => {
    /* Way 2
        - Add data-testid to the HTML element: <tbody data-testid="userListTesting">{allUsers}</tbody>
        - Not a great approach as we are adding directly to HTML
    */
    const users = [
      { name: "jest", email: "jest@test.com" },
      { name: "react", email: "react@test.com" },
    ];

    // Internally during render, testing library wraps the rendered within a div --> container.
    const { container } = render(<UserList users={users}></UserList>);

    // container is a node and we can use DOM manipulation techiniques now.
    const rows = container.querySelectorAll("tbody tr");

    expect(rows).toHaveLength(2);
  });

  it("should render email and name of user", () => {
    const users = [
      { name: "jest", email: "jest@test.com" },
      { name: "react", email: "react@test.com" },
    ];

    render(<UserList users={users}></UserList>);

    for (let user of users) {
      // We got this idea from screen.logTestingPlaygroundURL();
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});
