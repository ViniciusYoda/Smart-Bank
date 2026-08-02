import styled from "styled-components";
import { Transaction } from "../../info";
const Details = styled.div`display: grid; min-width: 0; gap: 3px; flex: 1;`;
const Category = styled.span`font-weight: 700;`;
const Description = styled.span`color: ${({ theme }) => theme.muted}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`;
const Amount = styled.span<{ $income: boolean }>`font-weight: 700; color: ${({ $income }) => $income ? "#16856f" : "inherit"};`;
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export default function Item({ category, description, amount, direction }: Transaction) { return <Details><Category>{category}</Category><Description>{description}</Description><Amount $income={direction === "income"}>{direction === "income" ? "+" : "−"} {currency.format(amount)}</Amount></Details>; }
