export function Header(isPageScrolled = false) {
  const navLinkStyle = "hover:text-bg-text transition-all"

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
        <h1 className="text-base font-bold">mfernandanll</h1>
        <nav className="flex gap-2">
          <a className={navLinkStyle} href="">
            Home
          </a>
          <a className={navLinkStyle} href="">
            Sobre
          </a>
          <a className={navLinkStyle} href="">
            Projetos
          </a>
          <a className={navLinkStyle} href="">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
