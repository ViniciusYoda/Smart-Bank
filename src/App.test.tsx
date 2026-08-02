import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => localStorage.clear());

test("filtra o extrato por texto", () => {
  render(<App />);
  fireEvent.change(screen.getByRole("searchbox", { name: /buscar transação/i }), { target: { value: "Uber" } });
  expect(screen.getByText("Uber")).toBeInTheDocument();
  expect(screen.queryByText("Bonna Parma")).toBeNull();
  expect(screen.getByText("1 transações")).toBeInTheDocument();
});

test("oculta e volta a exibir o saldo", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: /ocultar saldo/i }));
  expect(screen.getByText("••••••")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /mostrar saldo/i }));
  expect(screen.getByText("2.790,00")).toBeInTheDocument();
});
