export function Contact() {
  return (
    <section
      className="
        my-40 
        px-0 h-auto"
    >
      <div
        className="
          flex flex-col items-center gap-4 
          w-full max-w-[700px] mx-auto 
          max-lg:px-8 max-md:px-2"
      >
        <h2 className="text-3xl font-medium">Entre em contato</h2>
        <p className="text-base tracking-wide text-center">
          Se você tiver dúvidas ou apenas gostaria de dizer olá, entre em
          contato comigo. Responderei o mais breve possível!
        </p>
        <a
          className="
            block no-underline 
            mt-4 py-4 px-8 
            text-bg-secondary 
            rounded-md  cursor-pointer 
            border border-bg-secondary 
            text-center text-base tracking-wider 
            transition ease-linear duration-300 hover:bg-bg-text"
          href="mailto:m.fernanda.nll@gmail.com"
        >
          Diga olá
        </a>
      </div>
    </section>
  );
}
