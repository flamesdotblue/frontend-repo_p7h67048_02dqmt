import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Nebula Commerce',
    year: '2024',
    role: 'Design · Frontend',
    image:
      'https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Monolith → Micro',
    year: '2023',
    role: 'Product · Engineering',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Signal Studio',
    year: '2023',
    role: 'Brand · Web',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Selected Work</h2>
          <div className="hidden sm:block text-xs uppercase tracking-widest text-black/50">Curated 2018–2024</div>
        </header>

        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="col-span-12 md:col-span-6 lg:col-span-4 border border-black/10 hover:border-black/40 transition-colors group"
    >
      <div className="aspect-[4/3] overflow-hidden bg-black/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <h3 className="font-medium tracking-tight">{project.title}</h3>
          <p className="text-xs uppercase tracking-widest text-black/50 mt-1">
            {project.role} · {project.year}
          </p>
        </div>
        <a href="#" className="p-2 border border-black/15 hover:bg-black hover:text-white transition-colors">
          <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.article>
  );
}
