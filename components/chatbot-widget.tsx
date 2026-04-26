"use client";

import { WhatsAppIcon } from "@/components/social-icons";
import {
  chatbotQuickQuestions,
  chatbotStarterMessage,
  resolveChatbotAnswer,
} from "@/lib/chatbot-data";
import { siteConfig, siteContent } from "@/lib/site-content";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Bot, MessageSquareText, Send, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { type RefObject, useEffect, useMemo, useRef, useState } from "react";

type Message = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

function AssistantPanel({
  input,
  isTyping,
  messages,
  onClose,
  onInputChange,
  onSend,
  quickQuestions,
  viewportRef,
  inputRef,
}: {
  input: string;
  isTyping: boolean;
  messages: Message[];
  onClose: () => void;
  onInputChange: (value: string) => void;
  onSend: (question: string) => void;
  quickQuestions: string[];
  viewportRef: RefObject<HTMLDivElement | null>;
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  return (
    <section
      className="overflow-hidden rounded-[1.55rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)]/96 shadow-2xl backdrop-blur-xl"
      aria-label="Portfolio assistant"
    >
      <div className="border-b border-[color:var(--border)] px-4 py-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/12 text-indigo-600 dark:text-indigo-300">
              <Bot className="h-5 w-5" />
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">
                {siteContent.chatbot.title}
              </p>
              <p className="max-w-[16rem] text-xs leading-5 text-[color:var(--muted)] sm:max-w-[18rem]">
                {siteContent.chatbot.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="floating-button inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 text-[color:var(--muted)] dark:bg-slate-950/70"
            aria-label="Close assistant"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="border-b border-[color:var(--border)] px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quickQuestions.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => onSend(prompt)}
              className="button-chip shrink-0 rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1.5 text-[11px] font-medium text-[color:var(--foreground)] dark:bg-slate-950/80"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={viewportRef}
        role="log"
        aria-live="polite"
        className="h-[17rem] space-y-3 overflow-y-auto bg-[color:var(--surface)]/45 px-4 py-4 md:h-[18rem]"
      >
        {messages.map((message) => (
          <div key={message.id} className={message.role === "assistant" ? "flex" : "flex justify-end"}>
            <div
              className={
                message.role === "assistant"
                  ? "max-w-[90%] rounded-3xl rounded-tl-md border border-indigo-200/70 bg-white px-3.5 py-3 text-sm leading-6 text-[color:var(--foreground)] shadow-sm dark:border-indigo-500/20 dark:bg-slate-950/85"
                  : "max-w-[90%] rounded-3xl rounded-tr-md bg-slate-900 px-3.5 py-3 text-sm leading-6 text-white shadow-sm dark:bg-indigo-500"
              }
            >
              {message.content}
            </div>
          </div>
        ))}

        {isTyping ? (
          <div className="flex">
            <div className="inline-flex items-center gap-2 rounded-3xl rounded-tl-md border border-indigo-200/70 bg-white px-3.5 py-2.5 text-sm text-[color:var(--muted)] shadow-sm dark:border-indigo-500/20 dark:bg-slate-950/85">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              One moment...
            </div>
          </div>
        ) : null}
      </div>

      <div className="border-t border-[color:var(--border)] px-4 py-4">
        <form
          className="flex items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-white/90 px-3 py-2 shadow-sm dark:bg-slate-950/80"
          onSubmit={(event) => {
            event.preventDefault();
            onSend(input);
          }}
        >
          <label htmlFor="portfolio-assistant-input" className="sr-only">
            Ask about Abubakar&apos;s work
          </label>
          <MessageSquareText className="h-4 w-4 shrink-0 text-[color:var(--muted)]" />
          <input
            ref={inputRef}
            id="portfolio-assistant-input"
            type="text"
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder={siteContent.chatbot.placeholder}
            className="w-full bg-transparent text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted)]"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim()}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default function ChatbotWidget() {
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", content: chatbotStarterMessage },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 480);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const quickQuestions = useMemo(() => chatbotQuickQuestions, []);

  function handleAsk(question: string) {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedQuestion,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: resolveChatbotAnswer(trimmedQuestion),
        },
      ]);
      setIsTyping(false);
    }, 220);
  }

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" as const };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="assistant-panel"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            transition={transition}
            className="w-[min(23rem,calc(100vw-1rem))] sm:w-[23.5rem] md:w-[24rem]"
          >
            <AssistantPanel
              input={input}
              isTyping={isTyping}
              messages={messages}
              onClose={() => setIsOpen(false)}
              onInputChange={setInput}
              onSend={handleAsk}
              quickQuestions={quickQuestions}
              viewportRef={viewportRef}
              inputRef={inputRef}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {showScrollTop ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })}
            className="floating-button inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/90 text-[color:var(--foreground)] shadow-lg backdrop-blur dark:bg-slate-950/85"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        ) : null}

        {siteConfig.contactLinks.whatsapp ? (
          <Link
            href={siteConfig.contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start a WhatsApp chat"
            className="floating-button inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)]/95 text-emerald-600 shadow-xl backdrop-blur-xl dark:text-emerald-300"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </Link>
        ) : null}

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? siteContent.chatbot.closeLabel : siteContent.chatbot.openLabel}
          aria-expanded={isOpen}
          aria-controls="portfolio-assistant-input"
          className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5 dark:bg-indigo-500"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            {isOpen ? (
              <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-6" />
            ) : (
              <Bot className="h-4 w-4 transition-transform duration-200 group-hover:rotate-6" />
            )}
          </span>
          <span>{isOpen ? siteContent.chatbot.closeLabel : siteContent.chatbot.openLabel}</span>
        </button>
      </div>
    </div>
  );
}
