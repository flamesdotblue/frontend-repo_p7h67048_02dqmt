import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 grid grid-cols-12 items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="col-span-12 md:col-span-8"
          >
            <h1 className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
              Swiss-crafted digital experiences for the web
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-black/70">
              I design and build award-level interfaces with a rigorous grid, brutal simplicity, and motion that serves the story.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 border border-black px-5 py-3 uppercase tracking-widest text-sm font-medium bg-white hover:bg-black hover:text-white transition-colors"
              >
                View Work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 uppercase tracking-widest text-sm font-medium text-black/70 hover:text-black"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="col-span-12 md:col-span-4 flex md:justify-end mt-10 md:mt-0"
          >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full max-w-sm">
              <Stat k="10+" v="years" />
              <Stat k="40+" v="projects" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="border border-black/15 bg-white/70 backdrop-blur-sm px-5 py-4">
      <p className="text-3xl font-semibold tracking-tight">{k}</p>
      <p className="uppercase tracking-widest text-xs text-black/60">{v}</p>
    </div>
  );
}
