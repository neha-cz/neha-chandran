import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-[#d4d6ff] font-antiqua flex items-center justify-center">
      <main className="w-full">{children}</main>
    </div>
  );
}

