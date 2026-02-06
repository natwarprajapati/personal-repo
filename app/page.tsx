import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-black/5 dark:border-white/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
           
            <h1 className="text-xl font-semibold sm:text-2xl">
              Natwar Prajapati
            </h1>
             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Frontend Developer 
            </p>
          </div>
          <nav className="hidden gap-4 text-xs font-medium text-neutral-600 sm:flex">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#skills" className="hover:text-foreground">
              Skills
            </a>
            <a href="#experience" className="hover:text-foreground">
              Experience
            </a>
            <a href="#projects" className="hover:text-foreground">
              Projects 
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 space-y-20">
        {/* Hero / About */}
        <section id="about" className="grid gap-10 md:grid-cols-[3fr,2fr] items-start">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/10 dark:bg-white/[0.04]">
              Ahmedabad, Gujarat · Open to opportunities
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Building clean, responsive, high-performance web experiences.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              Passionate and detail-oriented front-end developer with hands-on
              experience in building responsive and interactive web applications
              using React, Next.js, Tailwind CSS, and Bootstrap. Skilled in
              creating clean, user-focused designs and optimizing performance
              for a seamless user experience. Eager to contribute to innovative
              projects and continue growing in a collaborative environment.
            </p>
          </div>
          <aside className="space-y-2 rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </h3>
            <p>Ahmedabad, Gujarat, India</p>
            <p>
              <a
                href="tel:+917405413108"
                className="hover:underline hover:underline-offset-2"
              >
                +91 7405413108
              </a>
            </p>
            <p>
              <a
                href="mailto:prajapatinatwar06@gmail.com"
                className="hover:underline hover:underline-offset-2"
              >
                prajapatinatwar06@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/in/natwarprajapati"
                target="_blank"
                rel="noreferrer"
                className="hover:underline hover:underline-offset-2"
              >
                linkedin.com/in/natwarprajapati
              </a>
            </p>
          </aside>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Tech Stack
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold">Languages & Frameworks</h3>
              <p className="text-xs text-neutral-700 dark:text-neutral-300">
                Next.js, React.js, JavaScript, TypeScript, Redux, RTK Query,
                Formik, Material UI, Bootstrap, HTML, HTML5, CSS, Tailwind CSS,
                Sass, CSS Modules
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold">Tools & Practices</h3>
              <p className="text-xs text-neutral-700 dark:text-neutral-300">
                Git, Postman, Cursor, ChatGPT, responsive UI design, state
                management, performance optimization, secure authentication
                flows, multi-language interfaces
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Professional
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-black/5 bg-black/[0.02] p-5 text-sm dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold">
                  Frontend Developer · AIS Technolabs
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Ahmedabad, Gujarat
                </p>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Dec 2024 – Present
              </p>
            </div>
            <ul className="space-y-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>
                Developed and maintained a scalable Next.js application using
                React, TypeScript, and Redux, ensuring high performance and a
                smooth user experience.
              </li>
              <li>
                Implemented secure authentication, payment workflows, dynamic
                game loading, and multi-language support.
              </li>
              <li>
                Improved UI/UX with Material UI and Bootstrap and collaborated
                closely with backend teams to deliver features reliably.
              </li>
              <li>
                Continuously learned modern frontend tools and best practices to
                enhance development quality.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Projects</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Selected Work
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold">
                Casino Games Platform (Astrobet, Pesacasino)
              </h3>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                Next.js · TypeScript · Redux Toolkit · RTK Query · MUI ·
                Bootstrap · Socket.IO
              </p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                <li>
                  Built and optimized a large-scale Next.js + TypeScript
                  frontend with SSR/SSG, delivering high performance, SEO
                  benefits, and a clean, maintainable architecture.
                </li>
                <li>
                  Implemented Redux Toolkit &amp; RTK Query for advanced state
                  management across authentication, payments, game data, and
                  cross-tab session synchronization.
                </li>
                <li>
                  Designed secure and user-friendly flows including login,
                  signup, password reset, OTP, and responsive multi-language UI
                  using MUI, Bootstrap, and i18next.
                </li>
                <li>
                  Integrated multiple payment systems (crypto, bank, vouchers)
                  and real-time updates via Socket.IO for an engaging user
                  experience.
                </li>
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold">AIS Technolabs Website</h3>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                CMS (Admin Panel) · Next.js · React · Reusable Components
              </p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                <li>
                  Contributed to the company&apos;s internal website project,
                  working on both CMS (Admin Panel) and frontend implementation.
                </li>
                <li>
                  Built and managed customizable templates with dynamic content
                  sections, enabling easy content updates without code changes.
                </li>
                <li>
                  Created reusable UI components, optimized layouts, and
                  integrated CMS data with frontend views to deliver a seamless
                  experience.
                </li>
                <li>
                  Collaborated with design and backend teams to improve
                  scalability, maintainability, and flexibility using modern
                  frontend practices.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Education</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Academic
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold">
                Bachelor of Science in Mathematics
              </h3>
              <p className="text-xs text-neutral-700 dark:text-neutral-300">
                K.K. Shah Jarodwala Maninagar Science College
              </p>
            </div>
            <div className="space-y-1 rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold">Frontend Development</h3>
              <p className="text-xs text-neutral-700 dark:text-neutral-300">
                Tops Technologies, Maninagar, Ahmedabad
              </p>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="space-y-4 rounded-2xl border border-dashed border-black/10 bg-black/[0.015] p-6 text-sm dark:border-white/15 dark:bg-white/[0.02]">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Let&apos;s build something great.
          </h2>
          <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            I&apos;m actively looking for frontend roles where I can work with
            modern React and Next.js stacks, contribute to challenging UI/UX
            problems, and grow with a collaborative team.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:prajapatinatwar06@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-xs font-medium text-background hover:bg-black dark:hover:bg-white/90"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/natwarprajapati"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-2 text-xs font-medium text-neutral-700 hover:bg-black/[0.03] dark:border-white/20 dark:text-neutral-200 dark:hover:bg-white/[0.06]"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
