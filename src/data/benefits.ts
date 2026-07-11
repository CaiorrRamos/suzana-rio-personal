import { Award, Dumbbell, HeartHandshake, MonitorSmartphone, Route, ShieldCheck } from "lucide-react";

export interface Benefit {
  id: number;
  title: string;
  description: string;
  side: "left" | "right";
  icon: typeof Award;
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Mais de 20 anos",
    description: "De experiência profissional guiando pessoas com método e segurança.",
    side: "left",
    icon: Award,
  },
  {
    id: 2,
    title: "Expertise comprovada",
    description: "Trajetória sólida ajudando pessoas a conquistarem resultados reais.",
    side: "right",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Treinos personalizados",
    description: "Estratégias respeitando sua individualidade, rotina e objetivos.",
    side: "left",
    icon: Dumbbell,
  },
  {
    id: 4,
    title: "Abordagem humanizada",
    description: "Cuidado técnico, escuta e consistência para evoluir sem pressão.",
    side: "right",
    icon: HeartHandshake,
  },
  {
    id: 5,
    title: "Presencial e Online",
    description: "Planos flexíveis para treinar onde fizer sentido para a sua vida.",
    side: "left",
    icon: MonitorSmartphone,
  },
  {
    id: 6,
    title: "Flexibilidade total",
    description: "Acompanhamento que encaixa perfeitamente na sua rotina.",
    side: "right",
    icon: Route,
  },
];
