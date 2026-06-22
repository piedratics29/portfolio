import SectionShell from './SectionShell.jsx';

export default function Contact() {
  const resumeFile = `${import.meta.env.BASE_URL}Rose-Piedra-Singco-Resume.pdf`;
  const localTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <SectionShell id="contact" title="Get in Touch" muted>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="flex flex-col justify-between">
          <p className="text-2xl md:text-4xl font-bold tracking-tight mb-8 md:mb-0 leading-[1.1]">
            Open to collaborations, freelance work, or full-time roles. 
            Let&apos;s create fast, intuitive experiences together.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="eyebrow !mb-0">Inquiries</span>
            <a className="text-2xl md:text-3xl font-bold tracking-tight border-b border-border w-fit hover:opacity-50 transition-opacity" href="mailto:rosepiedrasingco123@gmail.com">
              rosepiedrasingco123@gmail.com
            </a>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost w-fit mt-2"
            >
              View Resume
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-10 bg-text text-bg p-8 md:p-12">
          <div>
            <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">Location</span>
            <p className="text-lg">Ginatilan, Cebu, Philippines / Remote</p>
          </div>
          
          <div>
            <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">Socials</span>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/piedratics29" className="text-sm font-bold uppercase tracking-widest border-b border-bg/20 w-fit hover:border-bg transition-colors">GitHub</a>
              <a href="https://ph.linkedin.com/in/rose-piedra-a77282199" className="text-sm font-bold uppercase tracking-widest border-b border-bg/20 w-fit hover:border-bg transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-bg/20">
            <p className="text-[10px] uppercase tracking-widest opacity-40">Local Time · Philippines</p>
            <p className="text-sm font-bold">{localTime} GMT+8</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
