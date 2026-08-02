import { useMemo, useState } from "react";
import styled from "styled-components";
import { categories, Transaction } from "../../info";
import Items from "../Items";
import { Botao, Box } from "../UI";

const Header = styled.div`display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 14px;`;
const Count = styled.span`color: ${({ theme }) => theme.muted}; font-size: 12px;`;
const Filters = styled.div`display: grid; grid-template-columns: 1fr auto; gap: 8px; margin-bottom: 8px; input, select { min-width: 0; padding: 9px; border: 1px solid ${({ theme }) => theme.border}; border-radius: 7px; background: ${({ theme }) => theme.inside}; color: ${({ theme }) => theme.text}; } @media (max-width: 450px) { grid-template-columns: 1fr; }`;
const Empty = styled.p`color: ${({ theme }) => theme.muted}; padding: 30px 0; text-align: center;`;
const More = styled(Botao)`margin: 16px auto 0;`;
export default function Extrato({ transactions }: { transactions: Transaction[] }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("Todas"); const [limit, setLimit] = useState(5);
  const filtered = useMemo(() => transactions.filter((item) => category === "Todas" || item.category === category).filter((item) => `${item.description} ${item.category}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))).sort((a, b) => b.date.localeCompare(a.date)), [transactions, query, category]);
  return <Box aria-labelledby="statement-title"><Header><h2 id="statement-title">Extrato</h2><Count>{filtered.length} transações</Count></Header><Filters><input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setLimit(5); }} placeholder="Buscar transação" aria-label="Buscar transação" /><select value={category} onChange={(event) => { setCategory(event.target.value); setLimit(5); }} aria-label="Filtrar por categoria"><option>Todas</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></Filters>{filtered.length ? filtered.slice(0, limit).map((item) => <Items key={item.id} {...item} />) : <Empty>Nenhuma transação encontrada.</Empty>}{limit < filtered.length && <More type="button" onClick={() => setLimit((value) => value + 5)}>Ver mais</More>}</Box>;
}
