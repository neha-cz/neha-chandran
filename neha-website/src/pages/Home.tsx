import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const researchItems = [
  "Quantum circuit optimization software @ Infleqtion (incoming)",
  "Space-to-ground quantum key distribution (QKD) @ UC Space Program / Zhong Lab",
  "Modeling noise in superconducting qubits @ Johns Hopkins APL",
];

const devItems = [
  "Lightweight Jupyter-native RAG-based quantum computing co-pilot",
  "MacOS photonic quantum circuit composer + simulator",
  "Neutral atom quantum compilation pipeline visualizer in Manim",
  "Python package for calibration drift analysis in superconducting qubits",
  "Photonic quantum interferometer hardware, assembled from scratch",
  "Open source simulation framework for space-to-ground QKD (currently building)",
];

const b2cItems = [
  "Relationship predictor inspired by time-dependent open quantum systems.",
  "LLMs for psychedelic cognition, driven by ODE steering + LoRA (currently building)",
];

const publicationItems = [
  "IEEE Quantum Week (QCE) 2024",
  "Quantum Information Processing Conference 2025",
  "AIAA/USU Conference on Small Satellites 2026",
];

const bookItems = [
  "The Rigor of Angels: Borges, Heisenberg, Kant, and the Ultimate Nature of Reality",
  "Geometry of Grief: Reflections on Mathematics, Loss, and Life",
  "The Little Book of String Theory",
  "E Unibus Pluram: Television and U.S. Fiction",
  "Frankenstein",
  "The Fault in Our Stars",
];

function BulletList({ items, italic }: { items: string[]; italic?: boolean }) {
  return (
    <ul className="list-disc ml-2.5 pl-5 md:ml-3.5 md:pl-6 space-y-1 text-[0.98rem] leading-snug md:text-[1.05rem]">
      {items.map((item) => (
        <li key={item} className={italic ? "italic" : undefined}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[1.35rem] font-normal tracking-wide md:text-[1.5rem] mt-5 mb-1.5 md:mt-6",
        className
      )}
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[0.98rem] font-bold not-italic md:text-[1.05rem] mt-3 mb-1">
      {children}
    </h3>
  );
}

export default function Home() {
  return (
    <div className="content-container py-8 md:py-10 pb-6">
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.35rem] md:rounded-[1.65rem]",
          "border border-[#d4d6ff]/[0.22]",
          "bg-gradient-to-br from-[#d4d6ff]/[0.14] via-[#d4d6ff]/[0.05] to-[#363753]/[0.35]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_60px_rgba(212,214,255,0.04)]",
          "backdrop-blur-2xl backdrop-saturate-150",
          "ring-1 ring-inset ring-[#d4d6ff]/[0.08]",
          "px-5 py-6 md:px-8 md:py-8"
        )}
      >
        <div
          className="pointer-events-none absolute -left-1/4 top-0 h-1/2 w-[70%] rounded-full bg-gradient-to-r from-transparent via-[#d4d6ff]/20 to-transparent blur-3xl"
          aria-hidden
        />
        <div className="relative z-[1]">
          <h1 className="text-[2rem] md:text-[2.75rem] leading-tight font-normal mb-5 md:mb-6">
            hi, i&apos;m neha :)
          </h1>

          <SectionTitle className="mt-3 md:mt-4">about me</SectionTitle>
          <p className="text-[0.98rem] leading-snug md:text-[1.05rem]">
            I study physics at the University of Chicago. I&apos;m guided by two core questions: why
            humans behave the way they do and why the universe is structured the way it is. I believe
            these questions are connected, and my work is driven by deciphering the patterns between
            them. Recently, this has meant building math + physics models to better understand the human
            experience.
          </p>

          <SectionTitle>research</SectionTitle>
          <BulletList items={researchItems} />

          <SectionTitle>stuff i&apos;ve built</SectionTitle>
          <SubTitle>dev tooling/research projects</SubTitle>
          <BulletList items={devItems} />
          <SubTitle>b2c products</SubTitle>
          <BulletList items={b2cItems} />

          <SectionTitle>publications</SectionTitle>
          <BulletList items={publicationItems} />

          <SectionTitle>book/essay recs</SectionTitle>
          <BulletList items={bookItems} italic />
        </div>
      </div>
    </div>
  );
}
