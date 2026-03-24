"use client";

import { Bot, Send, X } from "lucide-react";
import { useState } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {isOpen ? (
        <div className="w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-slate-100 p-1.5 dark:bg-slate-800">
                <Bot className="h-4 w-4 text-indigo-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  AI Assistant
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Ready to help
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 text-slate-500 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="h-64 space-y-3 bg-slate-50/70 p-4 dark:bg-slate-950/40">
            <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-indigo-500 px-3 py-2 text-sm text-white">
              Hi! Want a quick overview of my work?
            </div>
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-slate-200 px-3 py-2 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">
              Yes, show me your featured projects.
            </div>
          </div>
          <div className="border-t border-slate-200 p-3 dark:border-slate-700">
            <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100"
              />
              <button
                aria-label="Send message"
                className="rounded-md bg-indigo-500 p-1.5 text-white transition-colors hover:bg-indigo-400"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-slate-100 dark:text-slate-900"
        >
          <Bot className="h-4 w-4 transition-transform group-hover:rotate-6" />
          Chat with AI
        </button>
      )}
    </div>
  );
}
