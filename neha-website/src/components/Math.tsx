import katex from "katex";
import "katex/dist/katex.min.css";

export function InlineMath({ math }: { math: string }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(math, { throwOnError: false }),
      }}
    />
  );
}

export function BlockMath({ math, n }: { math: string; n?: number }) {
  return (
    <div className="my-3 flex items-center gap-2">
      <div
        className="min-w-0 flex-1 overflow-x-auto text-center"
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
          }),
        }}
      />
      {n != null && (
        <span className="shrink-0 text-[0.88rem] text-[#d4d6ff] md:text-[0.95rem]">
          ({n})
        </span>
      )}
    </div>
  );
}
