import { render, screen } from "@testing-library/react";
import Table from "./Table";
import purchases from "../../data/purchases.json";

test("renders no purchases message", () => {
  render(<Table data={[]} />);

  const noDataText = screen.getByText(/No purchases to display/i);

  expect(noDataText).toBeInTheDocument();
});

test("renders Purchases caption", () => {
  render(<Table data={purchases} />);

  const caption = screen.getByText(/Purchases/i);

  expect(caption).toBeInTheDocument();
});

test("accurately renders sample data", () => {
  render(<Table data={purchases} />);

  const productRow = screen.getAllByRole("row")[1];

  // check for correct values
  expect(productRow).toHaveTextContent("auxiliary generating microchip");
  expect(productRow).toHaveTextContent("Dec 26, 2020");
  expect(productRow).toHaveTextContent("Food");
  expect(productRow).toHaveTextContent(
    "connecting the card won't do anything, we need to back up the digital HDD driver!"
  );
  expect(productRow).toHaveTextContent("$99,882.00");

  // check for no values from the third row, ie, incorrect values
  expect(productRow).not.toHaveTextContent("auxiliary generating panel");
  expect(productRow).not.toHaveTextContent("Dec 28, 2020");
  expect(productRow).not.toHaveTextContent("Footwear");
  expect(productRow).not.toHaveTextContent(
    "You can't reboot the feed without transmitting the back-end SMS pixel!"
  );
  expect(productRow).not.toHaveTextContent("$8,307.00");
});
