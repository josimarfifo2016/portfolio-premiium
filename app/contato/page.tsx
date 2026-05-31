"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ContatoPage() {
  const particlesInit = async (engine: unknown) => {
    await loadSlim(engine as Parameters<typeof loadSlim>[0]);
  };

  const ParticlesAny = Particles as ComponentType<Record<string, unknown>>;

  const phoneNumber = "551985492827";
  const whatsappMessage = "Olá! Gostaria de conversar sobre um projeto.";
  const emailAddress = "josimarfifo2016@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/josimar-da-silva-rodr%C3%ADgues-20a394139/";
  const githubUrl = "https://github.com/josimarfifo2016";

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(
      `Contato via site de portfólio de ${formName}`
    )}&body=${encodeURIComponent(
      `Nome: ${formName}%0AEmail: ${formEmail}%0AMensagem: ${formMessage}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />

      {/* PARTICLES */}
      <ParticlesAny
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
              },
            },
            color: {
              value: "#00ffff",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#00ffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 120,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <Link href="/" className="text-2xl font-bold tracking-widest hover:text-cyan-400 transition">
          JOSIMAR
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/#projects" className="hover:text-white transition">
            Projetos
          </Link>
          <Link href="/#skills" className="hover:text-white transition">
            Skills
          </Link>
          <Link href="/contato" className="hover:text-cyan-400 transition text-cyan-400">
            Contato
          </Link>
        </nav>
      </header>

      {/* CONTATO CONTENT */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 py-20 min-h-screen">
        {/* TITULO */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
            Entre em contato com
            <span className="block bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Josimar Da Silva Rodrigues
            </span>
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl text-lg mx-auto">
            Dev Full Stack disponível para projetos web, aplicações completas e parcerias técnicas.
          </p>
        </div>

        {/* CONTATO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 transition duration-300 flex flex-col items-center justify-center">
              <FaWhatsapp className="text-5xl text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-white/60 text-center mb-4">
                Envie uma mensagem rápida
              </p>
              <p className="text-cyan-400 font-semibold">+55 51 98549-2827</p>
            </div>
          </a>

          {/* Telefone */}
          <a
            href={`tel:+${phoneNumber}`}
            className="group relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400 transition duration-300 flex flex-col items-center justify-center">
              <FaPhone className="text-5xl text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Telefone</h3>
              <p className="text-white/60 text-center mb-4">
                Fale diretamente comigo
              </p>
              <p className="text-purple-400 font-semibold">+55 51 98549-2827</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${emailAddress}`}
            className="group relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-pink-400/30 rounded-2xl p-8 hover:border-pink-400 transition duration-300 flex flex-col items-center justify-center">
              <FaEnvelope className="text-5xl text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-white/60 text-center mb-4">
                Envie uma mensagem para o meu e-mail
              </p>
              <p className="text-pink-400 font-semibold">{emailAddress}</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-sky-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400 transition duration-300 flex flex-col items-center justify-center">
              <FaLinkedin className="text-5xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
              <p className="text-white/60 text-center mb-4">
                Conecte-se comigo no LinkedIn
              </p>
              <p className="text-blue-400 font-semibold">Perfil profissional</p>
            </div>
          </a>
        </div>

        {/* FORMULÁRIO RÁPIDO */}
        <div className="mt-20 max-w-2xl w-full">
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Mensagem Rápida</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Seu nome"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="Seu email"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
              />
              <textarea
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Sua mensagem"
                rows={5}
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition resize-none"
              />
              <button
                type="submit"
                className="mt-4 px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-md text-center py-6 mt-20">
        <p className="text-white/50">© 2026 Josimar Da Silva Rodrigues — Dev Full Stack.</p>
        <p className="text-white/60 mt-2 flex items-center justify-center gap-2">
          <FaGithub className="inline text-cyan-400" />
          <span>GitHub:</span>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition">josimarfifo2016</a>
        </p>
      </footer>
    </div>
  );
}
