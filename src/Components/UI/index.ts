import styled from "styled-components";
import { corPrimaria } from "./variaveis";

export const Icone = styled.img`height: 25px; width: 25px;`;
export const IconeTema = styled(Icone)`filter: ${({ theme }) => theme.filter};`;
export const Box = styled.section`
  display: flex; flex-direction: column; background-color: ${({ theme }) => theme.inside};
  border: 1px solid ${({ theme }) => theme.border}; border-radius: 12px; padding: 24px; width: calc(50% - 10px);
  box-shadow: 0 8px 24px rgba(0,0,0,.06);
  @media (max-width: 800px) { width: 100%; }
`;
export const Saldo = styled.div`font-weight: 700; font-size: clamp(28px, 4vw, 38px); margin-top: 8px;`;
export const Detalhe = styled.span`color: ${corPrimaria}; font-size: .65em;`;
export const Botao = styled.button`
  border-radius: 22px; background: ${corPrimaria}; border: none; color: white; font-weight: 700;
  font-size: 14px; padding: 10px 20px; cursor: pointer;
  &:hover { filter: brightness(.94); } &:focus-visible { outline: 3px solid #72dfd2; outline-offset: 2px; }
`;
export const BtnTema = styled.button`
  position: absolute; z-index: 2; top: 22px; right: 24px; background: transparent; border: none;
  border-radius: 50%; padding: 8px; cursor: pointer;
`;
