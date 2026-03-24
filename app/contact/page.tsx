import AnimatedSection from "@/components/animated-section";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full py-8">
      <AnimatedSection className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Feel free to reach out for collaboration, project discussions, or opportunities.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.7fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Mail className="h-4 w-4 text-indigo-500" />
              abubakar.cs@gmail.com
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <MessageCircle className="h-4 w-4 text-indigo-500" />
              WhatsApp: +92 300 6416478
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
}
