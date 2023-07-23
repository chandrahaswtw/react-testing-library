# INTRODUCTION

NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm test`

All the test file ends with .spec.js or .test.js or inside the \_\_test\_\_ folder, where it has simply the .js files inside are considered the test files and `jest` will pick up all these files.

# ALL ABOUT @testing-library/react

## Queries

### About Queries

- Single Elements
  - `getBy...` Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found
  - `queryBy...` Returns the matching node for a query, and return `null` if no elements match. This is useful for asserting an element that is not present.
  - `findBy...` Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms.
- Multiple Elements

  - `getAllBy...` Returns an array of all matching nodes for a query, and throws an error if no elements match.
  - `queryAllBy...` Returns an array of all matching nodes for a query, and return an empty array ([]) if no elements match.
  - `findAllBy...` Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 1000ms.

  ![Alt text](/images/QueryCheatSheet.png)

### ByRole

Refer to this [link](https://www.w3.org/TR/html-aria/#docconformance) to see all roles.

For example

- `heading` role include h1, h2, h3, h4, h5 and h6.
- `list` includes ul and li.
- `button` includes button.
- `link` includes a
- `textbox` includes input, type='text'

Examples:

```
const inputs = screen.getAllByRole("textbox");
const button = screen.getByRole("button");
```

### ByLabelText

```
<label htmlFor="email">Email</label>
<input type="text" id="email" />
```

Now to get the appropriate input element we do as. It specifically searches for label with text `/email/i`. It chooses anything with the id `email`

```
const nameInput = screen.getByLabelText(/email/i);
```

Great but if we want to be more specific (Choose only input but not anything) we can with `getByRole` as below. The second parameter is the `name` which typically looks for the label text.

```
screen.getByRole("textbox", { name: /email/i });
```

### ByText

### ByDisplayValue

### ByAltText

### ByTitle

### ByTestId

## Matchers

React testing library exposes extra matchers along with the ones that jest provides and are exposed on the global variable `expect`. We can find the whole list of matchers [here]("https://github.com/testing-library/jest-dom#custom-matchers").

## Testing playground

If you add the below in your testcase and it generates an URL on console when we run the tests.

```
screen.logTestingPlaygroundURL();
```

Now we when we open the generated URL we get the UI as below, when we hover over any item we get the corresponding query there.

![Alt text](/images/testingPlayground1.png)

At times we cannot get the required query. Say we wanted to check for `tr` we cannot hover, just add some extra styles and we can get the exact query as below:

![Alt text](/images/testingPlayground2.png)

# ALL ABOUT @testing-library/user-event

```
import user from "@testing-library/user-event";
```

We can simulate the user events as below:

- `user.click(element)` simulates clicking on provided element
- `user.keyboard('asdf')` simulates typing asdf
- `user.keyboard('{Enter}')` simulates pressing enter key.
