import SectionShell from './SectionShell.jsx';

const groups = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Angular', 'TypeScript', 'React Foundations'] },
  { title: 'UI & Styling', items: ['Tailwind CSS', 'Bootstrap', 'SASS', 'Flexbox', 'CSS Grid', 'Mobile-First'] },
  { title: 'CMS & Backend', items: ['WordPress', 'Elementor', 'Theme Customization', 'PHP', 'Django', 'Python'] },
  { title: 'SEO & Workflow', items: ['Technical SEO', 'Meta Tags', 'Image Optimization', 'Lazy Loading', 'XML Sitemaps', 'Page Speed', 'Git', 'GitHub', 'Agile / Scrum'] },
];

export default function Skills() {
  return (
    <SectionShell id="skills" title="Expertise" muted>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {groups.map((group) => (
          <article className="bg-bg p-8 flex flex-col group hover:bg-text hover:text-bg transition-colors duration-500" key={group.title}>
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-4 block group-hover:text-bg">Capability</span>
            <h3 className="mb-6 font-bold uppercase transition-all">{group.title}</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
               {group.items.map(item => (
                 <span key={item} className="text-[11px] font-bold uppercase tracking-tight py-1 px-2 border border-border group-hover:border-bg/40">
                   {item}
                 </span>
               ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
