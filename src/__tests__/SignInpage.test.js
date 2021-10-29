import { render as rtlRender, screen, fireEvent, waitFor } from "@testing-library/react";

import SignInpage from "../pages/SignInpage";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { QueryClientProvider, QueryClient } from "react-query";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/app/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const render = (component) => {
  const store = jest.fn();

  return rtlRender(
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Provider store={store}>{component}</Provider>{" "}
      </Router>
    </QueryClientProvider>
  );
};

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    companyId: "company-id1",
    teamId: "team-id1",
  }),
  useHistory: () => ({
    location: {
      search: "kk",
    },
  }),
  useRouteMatch: () => ({ url: "/company/company-id1/team/team-id1" }),
}));

it("should log the user in", () => {
  render(<SignInpage />);
});
