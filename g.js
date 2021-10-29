import React from "react";
import { cleanup, getByTestId, fireEvent, wait } from "react-testing-library";
import { renderWithRouter } from "../../../helpers";
import LoginPage from "../login-page";
afterEach(cleanup);
const handleSubmit = jest.fn();
test("<LoginPage /> renders with blank fields", () => {
  const { container } = renderWithRouter(<LoginPage />);
  const usernameOrEmailNode = getByTestId(container, "usernameOrEmail");
  const passwordNode = getByTestId(container, "login-password");
  const submitButtonNode = getByTestId(container, "login-button");
  expect(usernameOrEmailNode.tagName).toBe("INPUT");
  expect(passwordNode.tagName).toBe("INPUT");
  expect(submitButtonNode.tagName).toBe("BUTTON");
  expect(usernameOrEmailNode.getAttribute("value")).toBe("");
  expect(passwordNode.getAttribute("value")).toBe("");
});
test("Clicking the submit button after entering values", async () => {
  const { container } = renderWithRouter(<LoginPage handleSubmit={handleSubmit} />);
  const usernameOrEmailNode = getByTestId(container, "usernameOrEmail");
  const passwordNode = getByTestId(container, "login-password");
  const submitButtonNode = getByTestId(container, "login-button");
  fireEvent.change(usernameOrEmailNode, { target: { value: fakeUser.username } });
  fireEvent.change(passwordNode, { target: { value: fakeUser.password } });
  fireEvent.click(submitButtonNode);
  await wait(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
  expect(usernameOrEmailNode.tagName).toBe("INPUT");
  expect(passwordNode.tagName).toBe("INPUT");
  expect(submitButtonNode.tagName).toBe("BUTTON");
  expect(usernameOrEmailNode.getAttribute("value")).toBe("");
  expect(passwordNode.getAttribute("value")).toBe("");
});

import { render as rtlRender, screen, fireEvent, waitFor } from "@testing-library/react";
import SignInpage from "../pages/SignInpage";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import axios from "axios";
import { submitHandler } from "../pages/SignInpage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const history = createMemoryHistory();

const render = (component) => {
  return rtlRender(
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Provider store={store}>{component}</Provider>{" "}
      </Router>
    </QueryClientProvider>
  );
};

const spies = {
  get: jest.spyOn(axios, "get"),
  patch: jest.spyOn(axios, "patch"),
  post: jest.spyOn(axios, "post"),
};

beforeEach(() => {
  jest.resetAllMocks();
});

afterEach(() => {
  expect(spies.get).not.toHaveBeenCalled();
  expect(spies.patch).not.toHaveBeenCalled();
  expect(spies.post).not.toHaveBeenCalled();
});

it("renders the Sign-in page", async () => {
  render(<SignInpage />);
  await expect(screen.getByText(/Sign-In/i));
});

//*Show error if form filled incorrectly

//*Return Email and Password

jest.setTimeout(20000);

it("submit correct values", async () => {
  submitHandler = jest.fn();
  const utils = render(<SignInpage submitHandler={submitHandler} />);
  const email = utils.container.querySelector('input[name="email"]');
  const password = utils.container.querySelector('input[name="password"]');

  await waitFor(() => {
    fireEvent.change(email, { target: { value: "dan.adms864@gmail.com" } });
    fireEvent.change(password, { target: { value: "Emirates12" } });
  });

  expect(email.value).toBe("dan.adms864@gmail.com");
  expect(password.value).toBe("Emirates12");

  const submitButton = utils.container.querySelector('button[type="submit"]');

  await waitFor(() => {
    // fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
    fireEvent.click(submitButton);
    expect(submitHandler).toHaveBeenCalledTimes(1);
  });

  // await waitFor(() => {
  //   expect(submitHandler).toHaveBeenCalledWith({ email: "dan.adms864@gmail.com", password: "Emirates12" });

  // });

  // await waitFor(() => expect(submitHandler).toHaveBeenCalledTimes(1));
});

// it("User can login", async () => {
//   const history = createMemoryHistory();

//   render(
//     <QueryClientProvider client={queryClient}>
//       <Router history={history}>
//         <SignInpage />
//       </Router>
//     </QueryClientProvider>
//   );

//   await screen.getByPlaceholderText(/password/i);

//   await userEvent.type(screen.getByRole("textbox"), "HelloWorld!");
//   // await userEvent.type(screen.getByPlaceholderText(/password/i), "HelloWorld!");
//   await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

//   await expect(screen.getByText(/must be a valid email/i));

//   // await expect(screen.getByRole("textbox")).toHaveValue("hiii");

//   // expect(screen.getByPlaceholderText(/password/i))
// });
// https://testing-library.com/docs/ecosystem-user-event
