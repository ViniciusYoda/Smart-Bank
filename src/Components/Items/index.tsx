import styled from "styled-components";
import { Transaction } from "../../info";
import CategoryIcon from "../ImageFilter";
import Item from "../Item";
const Row = styled.article`border-bottom: 1px solid ${({ theme }) => theme.border}; display: flex; align-items: center; gap: 12px; padding: 13px 2px; font-size: 12px; &:last-child { border-bottom: 0; }`;
const DateText = styled.time`color: ${({ theme }) => theme.muted}; white-space: nowrap;`;
const formatDate = (date: string) => new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(new Date(`${date}T12:00:00`)).replace(".", "");
export default function Items(props: Transaction) { return <Row><CategoryIcon category={props.category} /><Item {...props} /><DateText dateTime={props.date}>{formatDate(props.date)}</DateText></Row>; }
