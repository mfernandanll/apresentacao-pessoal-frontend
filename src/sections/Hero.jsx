import Typewriter from "typewriter-effect";

export function Hero() {
  return (
    <section
      className="
        relative 
        flex justify-between items-center
        mx-auto w-full 
        min-h-[calc(100vh-64px)] max-w-[1320px] 
        max-xl:px-8
        max-lg:flex-col max-lg:gap-8 max-lg:justify-center max-lg:h-full 
        max-md:max-w-[960px] max-md:px-0
        max-sm:max-w-[720px]"
    >
      <div className="basis-[65%] flex-grow max-lg:w-full max-lg:mt-[20vh]">
        <p className="mt-4 font-bold mb-4 text-bg-secondary">Olá, meu nome é</p>
        <h2 className="text-5xl font-bold text-gray-800 max-md:text-3xl">
          Fernanda Loureiro
        </h2>
        <div className="flex text-5xl mb-4 max-md:text-2xl">
          <h2>Desenvolvedora&nbsp;</h2>
          <Typewriter
            options={{
              strings: ["Front-End."],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
            }}
          />
        </div>

        <p className="mb-4 max-w-lg text-base">
          Eu sou uma desenvolvedora front-end (e ocasionalmente back-end)
          especializada na construção e design de experiências digitais.
        </p>
      </div>

      <div className="basis-[35%] flex-grow flex flex-1 items-center flex-col h-full max-md:hidden">
        <div className="flex gap-3 min-h-20">
          <h2 className="animate-float text-5xl">1</h2>
          <h2 className="animate-float delay-1s text-5xl">1</h2>
          <h2 className="animate-float text-5xl">1</h2>
        </div>

        <div className="flex gap-3 min-h-20">
          <h2 className="animate-float text-5xl">1</h2>
          <h2 className="animate-float delay-1s text-5xl">1</h2>
          <h2 className="animate-float text-5xl">1</h2>
        </div>
      </div>

      <img
        className="absolute animate-spin duration-40 opacity-30 right-16 top-32 max-md:hidden"
        src="/src/assets/Ellipse.svg"
        alt="Ellipse rotating"
      />

      <svg
        width="280"
        height="280"
        viewBox="0 0 244 243"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[25%] right-[20%] opacity-30 animate-float max-md:hidden"
      >
        <rect
          x="2.39397"
          y="118.552"
          width="169.29"
          height="169.29"
          transform="rotate(-43.5262 2.39397 118.552)"
          stroke="#3D4351"
          strokeWidth="2"
          strokeDasharray="600"
          strokeDashoffset="600"
          className="animate-draw"
        />
      </svg>
    </section>
  );
}
