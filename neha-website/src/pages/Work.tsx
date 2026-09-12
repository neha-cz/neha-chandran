import type { ReactNode } from "react";
import PagePanel from "@/components/PagePanel";

const bodyClass = "text-[0.88rem] leading-snug md:text-[0.95rem]";
const sectionClass = `${bodyClass} mt-3 mb-0.5`;
const listClass =
  "list-disc ml-2.5 pl-5 md:ml-3.5 md:pl-6 mt-0.5 space-y-0.5 text-[0.88rem] leading-snug md:text-[0.95rem]";
const projectLinkClass =
  "cursor-pointer underline underline-offset-2 decoration-[#d4d6ff]/50 transition-colors duration-200 hover:text-[#f4f5ff] hover:decoration-[#f4f5ff]";

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className={listClass}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <PagePanel>
      <div className="mt-6 text-left md:mt-8">
        <p className={bodyClass}>
          Stuff I&apos;ve worked on over the past couple of years.
        </p>

        <h2 className={sectionClass}>Research</h2>
        <BulletList
          items={[
            "Translating quantum circuits into physical atom movement instructions @ Infleqtion.",
            "Space-to-ground quantum key distribution (QKD) @ UC Space Program / Zhong Lab.",
            "Modeling noise in superconducting qubits @ Johns Hopkins APL.",
            "Polarization encoded single-photon interferometer hardware @ IEEE / QIP.",
            "Three-photon photopolymerization + polymer nanoparticles @ Van Keuren Lab.",
          ]}
        />

        <h2 className={sectionClass}>Toy models</h2>
        <BulletList
          items={[
            <>
              <a
                href="https://github.com/neha-cz/marvarium"
                target="_blank"
                rel="noopener noreferrer"
                className={projectLinkClass}
              >
                Marvarium
              </a>
              : Attachment theory and sycophancy-like behavior in recursive self-improvement.
            </>,
            <>
              <a
                href="https://nehacz.substack.com/p/kaleido-a-toy-chatbot-with-composable"
                target="_blank"
                rel="noopener noreferrer"
                className={projectLinkClass}
              >
                KALEIDO
              </a>
              : Simulating altered state cognition in a VL model with activation space interventions.
            </>,
            <>
              <a
                href="https://nehacz.substack.com/p/qupid-a-toy-research-model-and-consumer"
                target="_blank"
                rel="noopener noreferrer"
                className={projectLinkClass}
              >
                Qupid
              </a>
              : Time-evolving relationships with quantum dissipative dynamics.
            </>,
          ]}
        />

        <h2 className={sectionClass}>Dev</h2>
        <BulletList
          items={[
            "Lightweight Jupyter-native RAG-based quantum computing co-pilot.",
            "MacOS photonic quantum circuit composer + simulator.",
            "Neutral atom quantum compilation pipeline visualizer in Manim.",
            "Lots of QML apps.",
          ]}
        />
      </div>
    </PagePanel>
  );
}
