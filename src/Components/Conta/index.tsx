import { FormEvent, useState } from "react";
import styled from "styled-components";
import dinheiro from "../../assets/images/dinheiro.svg";
import olho from "../../assets/images/olho.svg";
import privado from "../../assets/images/privado.svg";
import { categories, Transaction, TransactionCategory } from "../../info";
import { Botao, Box, Detalhe, Icone, IconeTema, Saldo } from "../UI";

const BalanceHeader = styled.div`font-size: 18px; padding: 24px 0;`;
const IconButton = styled(Botao)`align-self: flex-start; display: flex; align-items: center; gap: 8px;`;
const Form = styled.form`display: grid; gap: 12px; margin-top: 24px; padding-top: 20px; border-top: 1px solid ${({ theme }) => theme.border};`;
const Row = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 10px; @media (max-width: 480px) { grid-template-columns: 1fr; }`;
const Field = styled.label`display: grid; gap: 5px; color: ${({ theme }) => theme.muted}; font-size: 12px; font-weight: 600; input, select { min-width: 0; padding: 10px; border: 1px solid ${({ theme }) => theme.border}; border-radius: 7px; background: ${({ theme }) => theme.inside}; color: ${({ theme }) => theme.text}; }`;
const Message = styled.p`margin: 0; color: #16856f; font-size: 13px;`;

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function Conta({ balance, onAddTransaction }: { balance: number; onAddTransaction: (item: Transaction) => void }) {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const amount = Number(form.get("amount"));
    if (!Number.isFinite(amount) || amount <= 0) return setMessage("Informe um valor maior que zero.");
    onAddTransaction({ id: crypto.randomUUID(), description: String(form.get("description")).trim(), amount, date: String(form.get("date")), category: form.get("category") as TransactionCategory, direction: form.get("direction") as Transaction["direction"] });
    event.currentTarget.reset();
    setMessage("Transação adicionada com sucesso.");
  };

  return <Box aria-labelledby="account-title">
    <h2 id="account-title">Minha conta</h2>
    <BalanceHeader>Saldo disponível <IconeTema src={dinheiro} alt="" />
      <Saldo aria-live="polite">{visible ? <><Detalhe>R$</Detalhe> {currency.format(balance).replace("R$ ", "")}</> : "••••••"}</Saldo>
    </BalanceHeader>
    <IconButton type="button" onClick={() => setVisible((value) => !value)} aria-pressed={!visible}>
      <Icone src={visible ? privado : olho} alt="" />{visible ? "Ocultar saldo" : "Mostrar saldo"}
    </IconButton>
    <Form onSubmit={submit} onChange={() => setMessage("")}>
      <h3>Nova transação</h3>
      <Field>Descrição<input name="description" required maxLength={50} placeholder="Ex.: Supermercado" /></Field>
      <Row><Field>Valor<input name="amount" type="number" min="0.01" step="0.01" required placeholder="0,00" /></Field><Field>Data<input name="date" type="date" required defaultValue={new Date().toISOString().slice(0, 10)} /></Field></Row>
      <Row><Field>Categoria<select name="category">{categories.map((category) => <option key={category}>{category}</option>)}</select></Field><Field>Tipo<select name="direction"><option value="expense">Saída</option><option value="income">Entrada</option></select></Field></Row>
      <Botao type="submit">Adicionar transação</Botao>{message && <Message role="status">{message}</Message>}
    </Form>
  </Box>;
}
