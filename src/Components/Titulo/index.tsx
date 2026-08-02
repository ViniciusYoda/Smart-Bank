import styled from "styled-components";
const Titulo = styled.h1`color: ${({ theme }) => theme.text}; font-size: clamp(25px, 4vw, 34px); margin: 0; padding: 32px 0 20px;`;
export default Titulo;
