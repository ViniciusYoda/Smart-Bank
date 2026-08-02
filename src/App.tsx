import { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import ThemeSwitcher from "./Components/SwitherTema";
import { initialTransactions, Transaction } from "./info";

const getInitialTheme = () => {
  const saved = localStorage.getItem("smart-bank-theme");
  if (saved) return saved === "dark";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

function App() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const balance = useMemo(
    () => transactions.reduce((total, item) => total + (item.direction === "income" ? item.amount : -item.amount), 0),
    [transactions],
  );

  const toggleTheme = () => {
    setIsDark((current) => {
      localStorage.setItem("smart-bank-theme", current ? "light" : "dark");
      return !current;
    });
  };

  return (
    <ThemeProvider theme={isDark ? temaEscuro : temaClaro}>
      <GlobalStyle />
      <BtnTema type="button" onClick={toggleTheme} aria-label={`Ativar tema ${isDark ? "claro" : "escuro"}`}>
        <ThemeSwitcher isDark={isDark} />
      </BtnTema>
      <Cabecalho />
      <Container balance={balance} transactions={transactions} onAddTransaction={(item) => setTransactions((current) => [item, ...current])} />
    </ThemeProvider>
  );
}

export default App;
