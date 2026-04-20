
import { Link } from "react-router-dom";

function Main({ engineeringSkills, productSkills }) {
  return (
    <main className="flex-1 w-full px-6 md:px-16 py-12 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-8 space-y-16">
        <section>
          <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-6">
            /summary
          </h2>
          <p className="text-[17px] text-slate-700 dark:text-white/90 leading-relaxed font-light">
            TOPCIT Level 3 certified developer bridging the gap between{" "}
            <span className="text-pink-600 dark:text-[#e278b5]">
              robust technical logic
            </span>{" "}
            and{" "}
            <span className="text-pink-600 dark:text-[#e278b5]">
              intuitive user experience
            </span>
            . Specialized in architecting scalable web and mobile solutions using React.js, Laravel, and Flutter to drive digital innovation.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-8">
            /work_experience
          </h2>

          <div className="space-y-6">
            <div className="p-6 md:p-8 bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent border-l-2 border-l-cyan-600 dark:border-l-[#00F5FF] transition-colors duration-300">
              <div className="flex flex-col md:flex-row justify-between mb-4 md:items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Software Engineer Associate
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">
                    FULLSUITE
                  </p>
                </div>
                <span className="text-xs font-mono mt-4 md:mt-0 bg-slate-100 dark:bg-[#222222] text-cyan-700 dark:text-[#00F5FF] px-3 py-1 self-start">
                  Feb — Apr 2026
                </span>
              </div>

              <p className="text-slate-600 dark:text-white/70 mb-6 font-light leading-relaxed">
                Engineered a responsive, frontend-centric coaching module using React.js and TypeScript, leveraging Tailwind CSS to deliver a high-fidelity interface for corporate coaching workflows. Optimized employee performance tracking by bridging complex state management with a streamlined MySQL data architecture.
              </p>

              <div className="flex flex-wrap gap-3">
                {["REACT", "TYPESCRIPT", "MYSQL"].map((t) => (
                  <span
                    key={t}
                    className="bg-slate-100 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-3 py-1 text-[11px] font-mono tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
              <div className="flex flex-col md:flex-row justify-between mb-4 md:items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Lead Developer and Researcher (Capstone)
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">
                    PANGASINAN STATE UNIVERSITY - UCC
                  </p>
                </div>
                <span className="text-xs font-mono mt-4 md:mt-0 text-slate-500 dark:text-white/40 px-3 py-1 self-start">
                  2025 — 2026
                </span>
              </div>
              <p className="text-slate-600 dark:text-white/70 font-light leading-relaxed">
                Led the development of a cross-platform AI legal assistant, integrating OCR technology to translate complex legal documentation into accessible insights. Validated technical and functional efficacy through a peer-reviewed presentation at the International Interdisciplinary Research Conference 2026.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 space-y-16">
        <section>
          <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-8">
            /skills
          </h2>

          <div className="mb-8">
            <p className="text-[10px] font-mono text-slate-500 dark:text-white/40 tracking-widest uppercase mb-4">
              Engineering
            </p>
            <div className="flex flex-wrap gap-3">
              {engineeringSkills.map((s) => (
                <span
                  key={s}
                  className="bg-slate-100 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-3 py-1.5 text-[11px] font-mono tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono text-slate-500 dark:text-white/40 tracking-widest uppercase mb-4">
              Product & Design
            </p>
            <div className="flex flex-wrap gap-3">
              {productSkills.map((s) => (
                <span
                  key={s}
                  className="bg-slate-100 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-3 py-1.5 text-[11px] font-mono tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-xl mb-8">
            /education
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white/90">
                B.Sc Information Technology
              </h3>
              <p className="text-[11px] font-mono text-slate-500 dark:text-white/40 mt-1">
                Pangasinan State University - Urdaneta City Campus, 2026
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 dark:text-white/90">
                <Link
                  to="/Patricia-Puaso-TOPCIT-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Level 3 TOPCIT Certification
                </Link>
              </h3>
              <p className="text-[11px] font-mono text-slate-500 dark:text-white/40 mt-1">
                TOPCIT(Test of Practical Competency in ICT), 2025
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 bg-white dark:bg-[#1a1a1a] overflow-hidden rounded-sm w-full transition-colors duration-300">
          <img
            className="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            src="/Patricia-Puaso-Profile.jpg"
            alt="Profile Portrait"
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
