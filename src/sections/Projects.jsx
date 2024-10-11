import { GithubLogo, Rocket } from "phosphor-react";
import projectsData from "../data/projects.json";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

export function Projects() {
  const { isVisible, elementRef } = useIntersectionObserver(0.3);

  return (
    <section
      ref={elementRef}
      className="
        my-40 mx-auto tracking-wide
        pb-36 
        w-full max-w-[1320px] 
        max-md:max-w-[960px] max-md:px-2
        max-sm:max-w-[720px] 
        max-xl:px-8"
    >
      <p className="font-semibold tracking-wide my-4 text-bg-secondary">
        Apps que desenvolvi
      </p>
      <h2 className="mb-4 text-4xl font-extrabold tracking-wide">Projetos</h2>

      <div
        className={`grid grid-cols-[repeat(auto-fill,minmax(301px,1fr))] 
          gap-8 mt-8
          max-[425px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
          transition-all duration-1000
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {projectsData &&
          projectsData.map((project, index) => (
            <div
              key={index}
              className="
                bg-bg-card rounded-lg 
                hover:bg-bg-card-hover 
                transition-colors duration-300 ease-in-out"
            >
              <a href={project.demo} target="_blank">
                <img
                  className="
                  w-full 
                  cursor-pointer 
                  relative overflow-hidden 
                  bg-center bg-no-repeat bg-contain 
                  rounded-t-md 
                  filter contrast-90 transition ease-in-out duration-300 
                  hover:contrast-100"
                  src={project.img}
                  alt={`Imagem de ${project.title}`}
                />
              </a>

              <div className="flex flex-col flex-1 p-5 justify-between">
                <header className="flex justify-between items-center">
                  <h3 className="text-2xl tracking-wide">{project.title}</h3>

                  <div className="flex gap-2">
                    <a
                      className="
                      text-bg-secondary 
                      cursor-pointer 
                      transition-colors duration-300 ease-in-out 
                      hover:text-bg-primary"
                      href={project.github}
                      target="_blank"
                    >
                      <GithubLogo size={"1.5rem"} />
                    </a>

                    <a
                      className="
                      text-bg-secondary 
                      cursor-pointer 
                      transition-colors duration-300 ease-in-out 
                      hover:text-bg-primary"
                      href={project.demo}
                      target="_blank"
                    >
                      <Rocket size={"1.5rem"} />
                    </a>
                  </div>
                </header>

                <p className="text-base tracking-wide my-4">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <p className="text-sm tracking-wide">
                    {project.tags.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
