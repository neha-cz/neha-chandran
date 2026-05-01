import { ReactNode } from "react";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#363753] text-[#d4d6ff] font-antiqua flex flex-col">
      <main className="relative flex-1">{children}</main>
      <Footer />
    </div>
  );
}
