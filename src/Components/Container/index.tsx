import styled from "styled-components";
import { Transaction } from "../../info";
import Conta from "../Conta";
import Extrato from "../Extrato";
import Titulo from "../Titulo";

const Wrapper = styled.main`background: ${({ theme }) => theme.body}; min-height: calc(100vh - 84px); padding: 0 max(24px, 15vw) 48px;`;
const Content = styled.div`display: flex; align-items: flex-start; gap: 20px; color: ${({ theme }) => theme.text}; @media (max-width: 800px) { flex-direction: column; }`;

interface Props { balance: number; transactions: Transaction[]; onAddTransaction: (transaction: Transaction) => void; }

export default function Container({ balance, transactions, onAddTransaction }: Props) {
  return <Wrapper><Titulo>Olá, bem-vindo!</Titulo><Content><Conta balance={balance} onAddTransaction={onAddTransaction} /><Extrato transactions={transactions} /></Content></Wrapper>;
}
