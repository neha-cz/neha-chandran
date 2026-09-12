import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import Nav from "./Nav";

export default function PagePanel({
  children,
  hideScrollbar = false,
}: {
  children?: ReactNode;
  hideScrollbar?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startY: number; startTop: number } | null>(null);
  const [overflows, setOverflows] = useState(false);
  const [thumb, setThumb] = useState({ top: 0, height: 32 });

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const canScroll = scrollHeight > clientHeight + 2;
    setOverflows(canScroll);
    if (!canScroll) return;
    const height = Math.max(28, (clientHeight / scrollHeight) * clientHeight);
    const maxTop = Math.max(0, clientHeight - height);
    const range = scrollHeight - clientHeight;
    const top = range <= 0 ? 0 : (scrollTop / range) * maxTop;
    setThumb({ top, height });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateThumb();
    const frame = requestAnimationFrame(updateThumb);
    const observer = new ResizeObserver(updateThumb);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);
    el.addEventListener("scroll", updateThumb);
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", updateThumb);
      cancelAnimationFrame(frame);
    };
  }, [children, updateThumb]);

  const onThumbPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { startY: event.clientY, startTop: thumb.top };
  };

  const onThumbPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const { scrollHeight, clientHeight } = el;
    const maxTop = Math.max(0, clientHeight - thumb.height);
    const nextTop = Math.min(
      maxTop,
      Math.max(0, dragRef.current.startTop + (event.clientY - dragRef.current.startY))
    );
    const range = scrollHeight - clientHeight;
    el.scrollTop = maxTop === 0 || range <= 0 ? 0 : (nextTop / maxTop) * range;
  };

  const onThumbPointerUp = () => {
    dragRef.current = null;
  };

  const barVisible = overflows && !hideScrollbar;

  return (
    <div className="mx-auto flex h-dvh w-full max-w-[60rem] flex-col px-5 pt-[max(1.5rem,calc(50dvh-18rem))] md:px-6 md:pt-[max(1.5rem,calc(50dvh-20rem))]">
      <div
        className={cn(
          "relative flex min-h-0 flex-1 flex-col overflow-hidden",
          "rounded-t-[1.35rem] rounded-b-none md:rounded-t-[1.65rem]",
          "border-x border-t border-b-0 border-[#d4d6ff]/[0.22]",
          "bg-gradient-to-br from-[#d4d6ff]/[0.14] via-[#d4d6ff]/[0.05] to-[#363753]/[0.35]",
          "shadow-[0_-8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.14)]",
          "backdrop-blur-2xl backdrop-saturate-150",
          "px-6 pt-10 pb-5 md:px-10 md:pt-14 md:pb-6"
        )}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-1/2 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#d4d6ff]/20 to-transparent blur-3xl"
          aria-hidden
        />
        <div className="relative z-[1] flex min-h-0 w-full flex-1 flex-col">
          <Nav />
          <div className="relative mt-2 min-h-0 flex-1">
            <div
              ref={scrollRef}
              className="panel-scroll absolute inset-0 overflow-y-scroll overscroll-contain"
            >
              <div className={cn("flex min-h-full flex-col", barVisible && "pr-4")}>
                {children}
              </div>
            </div>
            {barVisible && (
              <div
                className="absolute right-0 top-0 z-10 h-full w-1.5 rounded-full bg-[#d4d6ff]/10"
                aria-hidden
              >
                <div
                  role="presentation"
                  className="absolute left-0 right-0 cursor-grab rounded-full bg-[#d4d6ff]/35 hover:bg-[#d4d6ff]/50 active:cursor-grabbing"
                  style={{ top: thumb.top, height: thumb.height }}
                  onPointerDown={onThumbPointerDown}
                  onPointerMove={onThumbPointerMove}
                  onPointerUp={onThumbPointerUp}
                  onPointerCancel={onThumbPointerUp}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
