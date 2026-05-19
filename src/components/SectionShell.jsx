import { motion } from 'motion/react';

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionShell({ id, title, children, muted }) {
  return (
    <section id={id} className={`border-t border-border ${muted ? 'bg-accent/40' : ''}`}>
      <div className="p-6 md:p-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeSlide}
        >
          {title && (
            <div className="mb-12">
              <span className="eyebrow">Section</span>
              <h2>{title}</h2>
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
