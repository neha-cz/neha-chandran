import type { ReactNode } from "react";

export const prose = "text-[0.88rem] leading-[1.55] md:text-[0.95rem]";

export function Section({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <section className="mt-14 first-of-type:mt-4">
      <h2 className="mb-2 text-[1.15rem] font-normal tracking-wide md:text-[1.25rem]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className={`mb-3 ${prose}`}>{children}</p>;
}

export function SceneBreak() {
  return (
    <p className="my-6 text-center tracking-[0.35em]" aria-hidden>
      ∗ ∗ ∗
    </p>
  );
}
