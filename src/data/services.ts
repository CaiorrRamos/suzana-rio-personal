import srOnline from "../assets/sr-online.webp";
import srPersonal from "../assets/sr-personal.webp";
import srRun from "../assets/sr-run.webp";
import suzanaBox from "../assets/suzana-box.webp";

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Personal Trainer",
    description: "Acompanhamento individual para performance, saúde e constância.",
    image: srPersonal,
  },
  {
    id: 2,
    title: "Consultoria Online",
    description: "Treinos personalizados com estratégia, rotina e evolução mensurável.",
    image: srOnline,
  },
  {
    id: 3,
    title: "Cobertura de Eventos",
    description: "Presença técnica em provas, grupos e experiências esportivas.",
    image: srRun,
  },
  {
    id: 4,
    title: "Treinamento Funcional",
    description: "Força, mobilidade e condicionamento para o seu dia a dia.",
    image: suzanaBox,
  },
];
