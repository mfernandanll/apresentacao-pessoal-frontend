import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";

export function SocialLinks() {
  const iconSize = "1.8rem";
  const link =
    "text-bg-primary cursor-pointer hover:text-bg-secondary hover:-translate-y-1 transition-transform duration-200";

  return (
    <div
      className="
        fixed z-10 left-[1%] bottom-0
        flex flex-col items-center gap-3 
        text-base text-bg-white
        max-[425px]:hidden lg:left-[2%]
      "
    >
      <a
        className={link}
        href="https://github.com/mfernandanll"
        target="_blank"
        aria-label="Link para o Github"
      >
        <GithubLogo size={iconSize} />
      </a>

      <a
        className={link}
        href="https://www.linkedin.com/in/maria-fernanda-loureiro/"
        target="_blank"
        aria-label="Link para o LinkedIn"
      >
        <LinkedinLogo size={iconSize} />
      </a>

      <a
        className={link}
        href="mailto:m.fernanda.nll@gmail.com"
        target="_blank"
        aria-label="Link para o Email"
      >
        <Envelope size={iconSize} />
      </a>
      
      <div className="w-[0.2rem] h-40 rounded mt-5 bg-bg-primary"></div>
    </div>
  );
}
