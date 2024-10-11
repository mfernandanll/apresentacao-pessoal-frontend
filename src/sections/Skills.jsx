import { Check } from "phosphor-react";
import skillsData from "../data/skills.json";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

export function Skills() {
  const { isVisible, elementRef } = useIntersectionObserver(0.1);

  return (
    <section
      ref={elementRef}
      className="
        my-40 mx-auto tracking-wide
        pr-8 pb-36 
        w-full max-w-[1320px] 
        max-md:max-w-[960px] max-md:px-2
        max-sm:max-w-[720px] 
        max-xl:px-8"
    >
      <p className="font-semibold text-bg-secondary mt-4 mb-4">
        Minhas experiências
      </p>
      <h2 className="font-extrabold text-4xl mb-4">Linguagens e tecnologias</h2>
      <p className="mb-4">
        Aqui estão as linguagens e tecnologias que eu tenho contato
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 mt-8">
        {skillsData.map((skill, index) => (
          <div
            key={skill.id}
            className={`
                flex items-center gap-2 
                bg-bg-card
                border-2 border-bg-secondary rounded-lg 
                p-4 
                transition-all duration-1000
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                hover:bg-bg-card-hover
              `}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <Check size={20} />
            <h3 className="text-base tracking-wider">{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
