import { DefaultTheme } from "styled-components";
import { conteudoClaro, conteudoEscuro, fundoClaro, fundoEscuro, textoFundoClaro, textoFundoEscuro } from "./variaveis";

export const temaClaro: DefaultTheme = { body: fundoClaro, inside: conteudoClaro, text: textoFundoClaro, muted: "#66767b", border: "#dce5e7", filter: "" };
export const temaEscuro: DefaultTheme = { body: fundoEscuro, inside: conteudoEscuro, text: textoFundoEscuro, muted: "#b7c0c2", border: "#4b4f52", filter: "invert(100%)" };
