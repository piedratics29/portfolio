import SectionShell from './SectionShell.jsx';

export default function About() {
  return (
    <SectionShell id="about" title="Philosophy">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
            Frontend-focused developer with nearly 3 years of experience in WordPress,
            Django, and modern React. I believe that digital products should be as 
            beautiful as they are functional.
          </p>
          <p className="text-lg opacity-60">
            Passionate about UI/UX, clean design, and performance. I continuously 
            improve my craft to ship polished, resilient interfaces that stand the 
            test of time and user scrutiny.
          </p>
        </div>
        <div className="md:col-span-5 bg-accent p-8 md:p-10 border border-border">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-6">Core Values</span>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Responsiveness</span>
              <span className="text-[10px] opacity-40">01</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Accessibility</span>
              <span className="text-[10px] opacity-40">02</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Performance</span>
              <span className="text-[10px] opacity-40">03</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Simplicity</span>
              <span className="text-[10px] opacity-40">04</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
