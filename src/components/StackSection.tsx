import { portfolioData } from "@/data/portfolio";

export function StackSection() {
  return (
    <section
      id="stack"
      className="w-full bg-white text-[#d80621] px-[6vw] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 font-body scroll-mt-14 border-t border-[#d80621]/20"
    >
      <div className="pb-8 sm:pb-12">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#d80621] leading-none">
          Stack tecnológico
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {portfolioData.stackGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <div className="pb-2 border-b border-[#d80621]">
              <h3 className="font-heading text-xl uppercase tracking-wide text-[#d80621]">
                {group.category}
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] opacity-70 leading-snug min-h-[36px]">
              {group.description}
            </p>
            <ul className="flex flex-col gap-2 pt-2 text-[14px] sm:text-[15px] opacity-90">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#d80621] shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
