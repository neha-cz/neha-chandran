import PagePanel from "@/components/PagePanel";

const linkClass =
  "cursor-pointer text-[#d4d6ff] transition-colors duration-200 hover:text-[#f4f5ff]";

export default function Home() {
  return (
    <PagePanel hideScrollbar>
      <div className="mt-6 text-left md:mt-8">
        <h1 className="text-center text-[1.85rem] md:text-[2.45rem] leading-tight font-normal mb-2 md:mb-3">
          Neha Chandran
        </h1>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.94rem] leading-snug md:mb-5 md:gap-x-4 md:text-[1rem]">
          <a
            href="https://www.linkedin.com/in/nehachandran18/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            linkedin
          </a>
          <span className="select-none text-[#d4d6ff]/50" aria-hidden>
            |
          </span>
          <a
            href="https://github.com/neha-cz"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            github
          </a>
          <span className="select-none text-[#d4d6ff]/50" aria-hidden>
            |
          </span>
          <a
            href="https://nehacz.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            substack
          </a>
          <span className="select-none text-[#d4d6ff]/50" aria-hidden>
            |
          </span>
          <a href="mailto:nehachandran@uchicago.edu" className={linkClass}>
            email
          </a>
        </div>

        <h2 className="text-[1.35rem] font-normal tracking-wide md:text-[1.5rem] mt-2 mb-1 md:mt-3">
        Hi, I&apos;m Neha :)
        </h2>
        <p className="text-[0.94rem] leading-snug md:text-[1rem]">
          I study computer science and cognitive science at the University of Chicago. I&apos;m guided by two core questions: why
          humans behave the way they do and why the universe is structured the way it is. I believe
          these questions are connected, and my work is driven by deciphering the patterns between
          them. Recently, this has meant building math + physics models to better understand the human
          experience.
        </p>
        <p className="mt-3 text-[0.94rem] leading-snug md:text-[1rem]">Interests:</p>
        <ul className="list-disc ml-2.5 pl-5 md:ml-3.5 md:pl-6 mt-0.5 space-y-0.5 text-[0.94rem] leading-snug md:text-[1rem]">
          {[
            "Quantum software",
            "AI alignment/interpretability",
            "Optical engineering",
            "Dissipative dynamics",
            "Startups/VCs",
            "Political theory",
            "Postmodernism",
            "Quantum mechanics",
            "Consciousness",
            "Infinities",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </PagePanel>
  );
}
