import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-black/10 bg-gradient-to-b from-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something remarkable</h2>
            <p className="mt-5 text-black/70 max-w-md">
              I partner with product teams, studios, and founders to craft interfaces that win hearts and awards.
            </p>
            <ul className="mt-8 space-y-2 text-sm">
              <li className="uppercase tracking-widest">Based in Zurich · Available Worldwide</li>
              <li className="uppercase tracking-widest">Response within 24 hours</li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="col-span-12 md:col-span-7 grid grid-cols-6 gap-4"
          >
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-xs uppercase tracking-widest mb-2">Name</label>
              <input required type="text" className="w-full border border-black/15 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-xs uppercase tracking-widest mb-2">Email</label>
              <input required type="email" className="w-full border border-black/15 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="col-span-6">
              <label className="block text-xs uppercase tracking-widest mb-2">Project</label>
              <input type="text" placeholder="Website redesign, product MVP, brand system…" className="w-full border border-black/15 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="col-span-6">
              <label className="block text-xs uppercase tracking-widest mb-2">Message</label>
              <textarea rows={5} className="w-full border border-black/15 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="col-span-6 flex items-center justify-between">
              <p className="text-xs text-black/60">No spam. Your details stay private.</p>
              <button type="submit" className="border border-black px-5 py-3 uppercase tracking-widest text-sm font-medium bg-white hover:bg-black hover:text-white transition-colors">
                Send Inquiry
              </button>
            </div>
          </motion.form>
        </div>

        <footer className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-sm uppercase tracking-widest">© {new Date().getFullYear()} awwrds.studio</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="underline underline-offset-4" href="#work">Work</a>
            <a className="underline underline-offset-4" href="#about">About</a>
            <a className="underline underline-offset-4" href="#contact">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
