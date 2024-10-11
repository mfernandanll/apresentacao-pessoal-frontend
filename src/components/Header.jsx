import { Link } from "react-scroll";

export function Header(isPageScrolled = false) {
  const navLinkStyle = "hover:text-bg-text transition-all cursor-pointer";

  return (
    <header
      className={`
      text-bg-primary p-4 
      fixed top-0 w-full z-20
      ${isPageScrolled ? "bg-bg-gradient-primary" : "bg-transparent"}
      `}
    >
      <div
        className="
          container flex justify-between items-center 
          mx-auto w-full 
          max-w-[1320px] max-md:max-w-[960px] max-sm:max-w-[720px]"
      >
        <Link
          to="hero"
          spy={true}
          duration={800}
          smooth={true}
          offset={-30}
          className="flex gap-1 cursor-pointer"
        >
          <span>&lt;</span>
          <h1 className="text-base font-bold">mfernandanll</h1>
          <span>&#47;&gt;</span>
        </Link>

        <nav>
          <ul className="flex gap-2">
            <li>
              <Link
                to="hero"
                duration={800}
                smooth={true}
                offset={-30}
                className={navLinkStyle}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                duration={800}
                smooth={true}
                offset={-110}
                className={navLinkStyle}
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                duration={800}
                smooth={true}
                offset={-100}
                className={navLinkStyle}
              >
                Habilidades
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                duration={800}
                smooth={true}
                offset={-100}
                className={navLinkStyle}
              >
                Projetos
              </Link>
            </li>
            
            <li>
              <Link
                to="contact"
                duration={800}
                smooth={true}
                className={navLinkStyle}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
