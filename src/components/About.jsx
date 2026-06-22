import SectionShell from './SectionShell.jsx';

export default function About() {
  return (
    <SectionShell id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
            Adaptable Frontend / Web Developer with nearly 3 years of experience
            creating responsive, user-focused interfaces and applications.
          </p>
          <p className="text-lg opacity-60">
            I build projects from scratch, connect frontend experiences with Django
            backends, and customize WordPress solutions for real client needs. I am
            currently expanding my frontend toolkit through Angular SPA projects.
          </p>
        </div>
        <div className="md:col-span-5 bg-accent p-8 md:p-10 border border-border">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-6">What I Bring</span>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Responsive UI</span>
              <span className="text-[10px] opacity-40">01</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Backend Integration</span>
              <span className="text-[10px] opacity-40">02</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">CMS Customization</span>
              <span className="text-[10px] opacity-40">03</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Agile Collaboration</span>
              <span className="text-[10px] opacity-40">04</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-10 border-t border-border">
        <span className="eyebrow">Background</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Professional Experience</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Frontend / Web Developer</h3>
                <p className="text-base font-medium opacity-70">Dinnox IT Solutions · Cebu, Philippines</p>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                Aug 2023 — Present
              </span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm opacity-70">
              <li className="border-t border-border pt-3">Builds and launches web projects from scratch.</li>
              <li className="border-t border-border pt-3">Creates responsive, cross-device interfaces.</li>
              <li className="border-t border-border pt-3">Integrates frontend components with Django backends.</li>
              <li className="border-t border-border pt-3">Customizes WordPress themes and functionality.</li>
            </ul>
          </article>

          <article className="lg:col-span-4 bg-text text-bg p-7">
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-3">Education</p>
            <h3 className="text-xl font-bold leading-tight mb-3">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-sm opacity-70 mb-5">
              Cebu Technological University — Ginatilan Extension Campus
            </p>
            <p className="text-xs font-bold uppercase tracking-widest">2019 — 2023</p>
            <div className="mt-8 pt-5 border-t border-bg/20">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">Languages</p>
              <p className="text-sm font-semibold">English · Tagalog · Cebuano</p>
            </div>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
