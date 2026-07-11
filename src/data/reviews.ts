import suzana from "../assets/suzana-rio.webp";
import suzanaBox from "../assets/suzana-box.webp";
import srRun from "../assets/sr-run.webp";

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Marina Costa",
    role: "Empresária, 42 anos",
    text: "Cheguei cansada e sem motivação. O treino personalizado me trouxe energia, autoestima e disciplina para cuidar de mim.",
    image: suzana,
    rating: 5,
  },
  {
    id: 2,
    name: "Ricardo Santos",
    role: "Profissional de TI, 53 anos",
    text: "As dores nas costas diminuíram e hoje treino com confiança. A Suzana respeita meus limites e me faz evoluir.",
    image: srRun,
    rating: 5,
  },
  {
    id: 3,
    name: "Cláudia Menezes",
    role: "Arquiteta, 39 anos",
    text: "A consultoria online encaixou na minha agenda e finalmente consegui manter constância com acompanhamento de verdade.",
    image: suzanaBox,
    rating: 5,
  },
];
