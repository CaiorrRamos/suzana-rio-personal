import claudiaReview from "../assets/claudia-review.jpeg";
import marinaReview from "../assets/marina-review.jpeg";
import ricardoReview from "../assets/ricardo-review.jpeg";

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
    text: "Comecei buscando mais disposição para a rotina e encontrei um acompanhamento que respeitou meu ritmo. Hoje treino com constância e sinto diferença real na energia do dia a dia.",
    image: marinaReview,
    rating: 5,
  },
  {
    id: 2,
    name: "Ricardo Santos",
    role: "Profissional de TI, 53 anos",
    text: "Passava muitas horas sentado e sentia dores nas costas com frequência. Com os treinos da Suzana, ganhei mobilidade, força e segurança para me movimentar melhor.",
    image: ricardoReview,
    rating: 5,
  },
  {
    id: 3,
    name: "Cláudia Menezes",
    role: "Arquiteta, 39 anos",
    text: "Eu sempre começava e parava. O acompanhamento trouxe organização, ajustes simples na rotina e treinos possíveis de cumprir, sem pressão e com evolução visível.",
    image: claudiaReview,
    rating: 5,
  },
];
