import styled from "styled-components";
import bankLogo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const Header = styled.header`background: ${corPrimaria}; padding: 18px max(24px, 15vw); min-height: 84px; display: flex; align-items: center;`;
const Brand = styled.div`display: flex; align-items: center; gap: 12px; color: white; font-size: 20px; font-weight: 700;`;
const Logo = styled.img`height: 48px; width: 48px;`;

export default function Cabecalho() {
  return <Header><Brand><Logo src={bankLogo} alt="" /><span>Smart Bank</span></Brand></Header>;
}
