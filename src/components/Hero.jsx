import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const profileImage = `${import.meta.env.BASE_URL}my_photo.jpg`;

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col pt-[80px] md:pt-0">
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* LEFT SIDE: TYPOGRAPHY & INFO */}
        <motion.div 
          className="flex-1 flex flex-col justify-between p-4 md:p-8 border-b md:border-b-0 md:border-r border-border md:pt-32 w-full"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="flex flex-col gap-4 max-w-full">
            <motion.h1 variants={item} className="text-[16vw] xl:text-[11vw] leading-[0.8] font-bold uppercase tracking-tighter w-full">
              Digital<br />
              Experience<br />
              Design
            </motion.h1>
            <motion.p variants={item} className="text-lg md:text-xl font-light tracking-tight max-w-2xl mt-6 opacity-80 leading-snug">
               I am Rose Piedra Singco, a Frontend Engineer focused on building immersive, high-performance digital products from concept to production.
            </motion.p>
            <motion.div variants={item} className="mt-8">
               <a href="#projects" className="inline-block border border-text px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-text hover:text-bg transition-colors">
                 Explore Work
               </a>
            </motion.div>
          </div>

          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-full border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Based in</span>
              <span className="text-sm font-bold uppercase tracking-tight">Cebu, Philippines</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Experience</span>
              <span className="text-sm font-bold uppercase tracking-tight">3+ Years</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Status</span>
              <span className="text-sm font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open for Hire
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE & SNAPSHOT */}
        <motion.div 
          className="w-full md:w-[45%] h-[50vh] md:h-auto border-border flex flex-col relative overflow-hidden group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img 
            src={profileImage} 
            alt="Rose Piedra Singco" 
            className="w-full h-full object-cover object-top grayscale transition-transform duration-[2s] group-hover:scale-105"
          />
          
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col">
             <div className="backdrop-blur-xl bg-black/50 border border-white/20 p-6 w-full">
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 block mb-3 text-white">Capability Snapshot</span>
               <p className="text-white text-sm font-bold uppercase tracking-tight leading-relaxed">
                 UI Polish, Performance, React, Tailwind, WordPress, Django
               </p>
             </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
