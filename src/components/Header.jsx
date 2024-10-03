export const Header = () => {
  return (
    <header className="text-bg-white p-4 bg-bg-secondary">
      <div className="container flex justify-between items-center mx-auto">
        <h1 className="text-2xl font-bold">Fernanda Loureiro</h1>
        <nav className="flex gap-2">
          <a className="hover:text-bg-text transition-all" href="">Home</a>
          <a className="hover:text-bg-text transition-all" href="">Sobre</a>
          <a className="hover:text-bg-text transition-all" href="">Projetos</a>
          <a className="hover:text-bg-text transition-all" href="">Contato</a>
        </nav>
      </div>
    </header>
  );
};
