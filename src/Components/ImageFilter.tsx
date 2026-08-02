import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { TransactionCategory } from "../info";
import { IconeTema } from "./UI";
const images: Record<TransactionCategory, string> = { Alimentação: alimentacao, Utilidades: utilidades, Saúde: saude, Transporte: transporte, Outros: outros };
export default function CategoryIcon({ category }: { category: TransactionCategory }) { return <IconeTema src={images[category]} alt="" />; }
