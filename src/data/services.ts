import srOnline from "../assets/sr-online.webp";
import srPersonal from "../assets/sr-personal.webp";
import srRun from "../assets/sr-run.webp";

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Personal Trainer",
    description: "Acompanhamento individual para performance, saúde e constância.",
    image: srPersonal,
    href: "https://wa.me/5581982881368?text=Ol%C3%A1%20Suzaninha!%20Quero%20saber%20mais%20sobre%20os%20Planos%20de%20Personal%20Trainer!%20",
  },
  {
    id: 2,
    title: "Consultoria Online",
    description: "Treinos personalizados com estratégia, rotina e evolução mensurável.",
    image: srOnline,
    href: "https://wa.me/5581982881368?text=Ol%C3%A1%20Suzaninha!%20Quero%20saber%20mais%20sobre%20os%20Planos%20de%20Acompanhamento%20Online!%20",
  },
  {
    id: 3,
    title: "Cobertura de Eventos",
    description: "Presença técnica em provas, grupos e experiências esportivas.",
    image: srRun,
    href: "https://wa.me/5581982881368?text=Ol%C3%A1%20Suzaninha!%20Quero%20saber%20mais%20sobre%20os%20Planos%20de%20Acompanhamento%20Online!%20",
  },
];
