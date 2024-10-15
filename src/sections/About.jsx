import { TelegramLogo } from "phosphor-react";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

export function About() {
  const { isVisible, elementRef } = useIntersectionObserver(0.3);

  return (
    <section
      ref={elementRef}
      className={
        `flex justify-between items-center
        my-10 w-full mx-auto 
        max-w-[1320px] max-md:max-w-[960px] max-sm:max-w-[720px]
        transition-all duration-1000
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
      }
    >
      <div
        className="
        grid grid-cols-2 
        container 
        gap-4 
        max-xl:px-8 
        max-lg:grid-cols-1 max-lg:gap-16
        max-md:px-2"
      >
        <div className="flex justify-start items-start relative max-lg:justify-center max-md:items-center">
          <img
            className="
            border-t-[9px] border-l-[9px] border-bg-text
            p-6 
            drop-shadow-[0_1.6rem_1.6rem_rgba(51,51,51,0.25)] 
            max-lg:w-[90%] 
            md:w-[80%] md:max-w-[80%] md:p-8 
            sm:w-[100%] sm:max-w-[100%] sm:p-4"
            src="/src/assets/profile.jpg"
            alt="Foto de Fernanda Loureiro"
          />
        </div>

        <div className="tracking-wide text-base">
          <p className="mb-4 font-bold text-bg-text">Um pouco sobre mim</p>
          <h2 className="mb-4 text-4xl">Sobre</h2>

          <p className="mb-3">
            Sou <strong>desenvolvedora front-end</strong> com{" "}
            <strong>2 anos de experiência</strong> atuando no{" "}
            <strong>front-end</strong> com{" "}
            <strong>React, Angular, JavaScript, TypeScript</strong>, além de ter
            trabalhado com <strong>integração de APIs REST</strong>. Tenho uma
            verdadeira paixão por criar componentes reutilizáveis e interfaces
            intuitivas, e estou sempre em busca de novos aprendizados para
            aprimorar minhas habilidades e otimizar sistemas para proporcionar a
            melhor experiência do usuário.
          </p>

          <p className="mb-3">
            Também possuo experiência em projetos gerenciados por{" "}
            <strong>Metodologias Ágeis como SCRUM</strong>, conhecimentos em
            versionamento de código com <strong>GIT/Github</strong>,{" "}
            <strong>testes unitários com Jest</strong> e noções de{" "}
            <strong>UI/UX</strong>.
          </p>

          <p className="mb-3">
            Atualmente, estou me aprofundando em Node.js e explorando novas
            tecnologias em projetos pessoais.
          </p>

          <div className="flex items-center gap-8 max-sm:flex-col">
            <a
              href="mailto:m.fernanda.nll@gmail.com"
              rel="noopener noreferrer"
              aria-label="Enviar email para Fernanda Loureiro"
              className=" 
                no-underline 
                self-center 
                mt-6 p-3 
                bg-bg-secondary text-bg-white 
                border-none rounded-md 
                flex items-center gap-2 
                transition-all duration-500 
                hover:bg-bg-white hover:text-bg-secondary"
            >
              Entre em contato
              <TelegramLogo size="1.6rem" />
            </a>

            <a
              href="Resume.pdf"
              aria-label="Download de curriculum vitae de Fernanda Loureiro"
              download="CV - MARIA FERNANDA NATIVIDADE LIMA LOUREIRO.pdf"
              className="
                mt-6 
                transition-all duration-300 
                border-b-2 border-transparent 
                no-underline self-center
                hover:border-b-bg-secondary"
            >
              Baixar currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
