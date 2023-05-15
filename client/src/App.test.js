import { render, screen, cleanup, fireEvent, userEvent} from '@testing-library/react';
import App from './App';
/* 
Test Cases for Front End Application
*/

//Test for first rendered components for user input
test("should render form", () =>{
  render(<App />);
  expect(
    screen.getByRole("heading", {name: "Enter a Number"}) 
  ).toBeInTheDocument();
  expect(
    screen.getByRole("spinbutton", {type: "number",required: ""}) 
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", {type: "submit"})
  ).toBeInTheDocument();
}
)

test("Hook values at launch", () =>{
  render(<App />);
  expect(App.isSubmitted).toBe(undefined);
  expect(App.Data).toBe(undefined);
  expect(App.Result).toBe(undefined);
}
)





