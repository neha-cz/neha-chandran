import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#d4d6ff]/25 mt-8 md:mt-10">
      <div className="content-container py-5 flex flex-col items-center gap-2.5">
        <p className="text-center text-sm text-[#d4d6ff]/75">
          © 2025 neha chandran
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/neha-cz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4d6ff]/70 hover:text-[#d4d6ff] transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/neha-chandran-6a3b72221/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4d6ff]/70 hover:text-[#d4d6ff] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:nehachandran@uchicago.edu"
            className="text-[#d4d6ff]/70 hover:text-[#d4d6ff] transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
