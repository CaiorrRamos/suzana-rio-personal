import { ArrowUpRight, Facebook, Instagram, Linkedin, Send, Youtube } from "lucide-react";
import logo from "../../assets/logo-sr.svg";
import { Container } from "../Container/Container";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export function Footer() {
  return (
    <footer id="contato" className="bg-dark py-8 text-white">
      <Container>
        <div className="rounded-[28px] bg-dark">
          <div className="flex flex-col gap-5 border-b border-white/12 pb-10 md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl font-bold md:text-5xl">Entrar em Contato</h2>
            <PrimaryButton href="https://wa.me/5577983443636" variant="primary">Whatsapp</PrimaryButton>
          </div>
          <div className="grid gap-10 border-b border-white/12 py-10 md:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
            <div>
              <img src={logo} alt="Suzana Rio" loading="lazy" className="mb-5 h-14 w-auto" />
              <p className="max-w-sm text-sm leading-7 text-white/62">Movimento com propósito para uma vida mais forte, ativa e feliz. Mais de 20 anos transformando vidas.</p>
              <div className="mt-5 flex gap-3 text-secondary">
                {[Instagram, Facebook, Youtube, Linkedin].map((Icon, index) => <Icon key={index} size={18} />)}
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase text-secondary">Navigation</h3>
              <ul className="space-y-3 text-sm text-white/62">
                <li><a href="#inicio" className="hover:text-white">Início</a></li>
                <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
                <li><a href="#avaliacoes" className="hover:text-white">Avaliações</a></li>
                <li><a href="#contato" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase text-secondary">Contact</h3>
              <p className="text-sm text-white/62">+91 7738443636</p>
              <p className="mt-4 text-sm text-white/62">suzaninha.rio@hotmail.com</p>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase text-secondary">Newsletter</h3>
              <form className="flex overflow-hidden rounded-xl bg-white">
                <input type="email" placeholder="Email" className="min-w-0 flex-1 px-4 text-sm text-dark outline-none" />
                <button aria-label="Enviar newsletter" className="grid h-12 w-12 place-items-center bg-secondary text-dark transition hover:bg-white">
                  <Send size={18} />
                </button>
              </form>
              <a href="#inicio" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-white">
                Voltar ao topo <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-white/54 md:flex-row md:items-center md:justify-between">
            <p>Copyright© 2026 RM Agency. All Rights Reserved.</p>
            <p>User Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
