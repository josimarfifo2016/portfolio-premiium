"use client";

import { useEffect, useState, type ComponentType } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiGsap,
  SiNodedotjs,
  SiFirebase,
  SiPython,
  SiFigma,
} from "react-icons/si";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function PremiumPortfolio() {

  /* MOUSE EFFECT */
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /* LOADING */
  const [loading, setLoading] = useState(true);

  /* PARTICLES */
  const particlesInit = async (engine: unknown) => {
    await loadSlim(engine as Parameters<typeof loadSlim>[0]);
  };

  const ParticlesAny = Particles as unknown as ComponentType<Record<string, unknown>>;

  const skills = [
    { name: "React", Icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "text-sky-400" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
    { name: "Framer Motion", Icon: SiFramer, color: "text-violet-400" },
    { name: "GSAP", Icon: SiGsap, color: "text-green-400" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-lime-400" },
    { name: "Firebase", Icon: SiFirebase, color: "text-orange-400" },
    { name: "Python", Icon: SiPython, color: "text-yellow-400" },
    { name: "Figma", Icon: SiFigma, color: "text-pink-400" },
  ];

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  /* LOADING SCREEN */
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden z-[9999]">

        {/* Glow de fundo */}
        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />

        {/* Spinner duplo */}
        <div className="relative">
          <div className="w-40 h-40 rounded-full border border-cyan-400/20 border-t-cyan-400 animate-spin" />
          <div className="absolute inset-6 rounded-full border border-purple-500/20 border-b-purple-500 animate-spin" />
        </div>

        {/* Nome */}
        <h1 className="mt-10 text-5xl font-black tracking-widest bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          JOSIMAR
        </h1>

        <p className="mt-4 text-white/50 tracking-[0.4em] uppercase text-sm">
          Loading Experience
        </p>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND GLOW - canto superior esquerdo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      {/* BACKGROUND GLOW - canto inferior direito */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />

      {/* PARTICLES - partículas animadas de fundo */}
      <ParticlesAny
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            number: { value: 80, density: { enable: true } },
            color: { value: "#00ffff" },
            links: {
              enable: true,
              distance: 150,
              color: "#00ffff",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">

        <h1 className="text-2xl font-bold tracking-widest">
          JOSIMAR
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <Link href="#home" className="hover:text-white transition">Home</Link>
          <Link href="#projects" className="hover:text-white transition">Projetos</Link>
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="/contato" className="hover:text-cyan-400 transition">Contato</Link>
        </nav>

      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[90vh]"
      >

        {/* FOTO com efeito parallax no mouse */}
        <div
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          className="w-56 h-56 rounded-full overflow-hidden border border-cyan-400/30 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_100px_rgba(34,211,238,0.35)] hover:scale-105 transition duration-300"
        >
          <img
            src="/images/foto.png"
            alt="Josimar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* NOME */}
        <h3 className="text-3xl font-bold mt-8">Josimar Rodrigues</h3>
        <p className="text-cyan-400 mt-2 text-lg">Full Stack Developer</p>

        {/* TÍTULO PRINCIPAL */}
        <h2 className="mt-10 text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Criando experiências digitais
          <span className="block bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            premium
          </span>
        </h2>

        {/* DESCRIÇÃO */}
        <p className="mt-6 text-white/60 max-w-2xl text-lg">
          Desenvolvedor focado em interfaces modernas,
          animações premium e experiências interativas.
        </p>

        {/* BOTÕES DE AÇÃO */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">

          <Link href="#projects" className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl inline-flex items-center justify-center">
            Ver Projetos
          </Link>

          <Link href="/contato" className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300 inline-flex items-center justify-center">
            Contato
          </Link>

          <a
            href="https://github.com/josimarfifo2016"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300 inline-flex items-center justify-center gap-2"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/josimar-da-silva-rodr%C3%ADgues-20a394139/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300 inline-flex items-center justify-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="mailto:josimarfifo2016@gmail.com?subject=Pedido%20de%20CV&body=Olá%20Josimar%2C%0A%0APreciso%20do%20seu%20CV%20para%20avaliar%20uma%20oportunidade.%0A%0ASeguem%20os%20dados%20para%20retorno.%0A%0AObrigado.%0A"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300 inline-flex items-center justify-center"
          >
            Download CV
          </a>

        </div>

      </section>

      {/* PROJETOS */}
      <section
        id="projects"
        className="relative z-10 px-6 md:px-20 py-20"
      >

        <div className="flex items-center justify-between mb-12">
          <h3 className="text-4xl font-bold">Projetos Premium</h3>
          <span className="text-white/40">2026</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 - Site Futurista — ALTERADO: agora é um <a> clicável que abre o site */}
          <a
            href="https://futurist-site.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-3 transition duration-500 shadow-2xl block cursor-pointer"
          >
            <div className="h-56 rounded-2xl bg-linear-to-br from-purple-500/30 to-cyan-500/20 mb-6 flex items-center justify-center text-6xl">
              ✨
            </div>
            <h4 className="text-2xl font-bold mb-3">Site Futurista</h4>
            <p className="text-white/60">Landing page moderna com animações premium.</p>
          </a>

          {/* CARD 2 - Dashboard IA */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-3 transition duration-500 shadow-2xl">
            <div className="h-56 rounded-2xl bg-linear-to-br from-pink-500/30 to-orange-500/20 mb-6 flex items-center justify-center text-6xl">
              🚀
            </div>
            <h4 className="text-2xl font-bold mb-3">Dashboard IA</h4>
            <p className="text-white/60">Painel moderno com experiência premium. </p>
          </div>

          {/* CARD 3 - Portfólio Interativo */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-3 transition duration-500 shadow-2xl">
            <div className="h-56 rounded-2xl bg-linear-to-br from-cyan-500/30 to-blue-500/20 mb-6 flex items-center justify-center text-6xl">
              🎨
            </div>
            <h4 className="text-2xl font-bold mb-3">Portfólio Interativo</h4>
            <p className="text-white/60">Interface estilo Apple com animações suaves.</p>
          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative z-10 px-6 md:px-20 py-20"
      >

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">
            Tecnologias que eu uso com confiança
          </h3>
          <p className="text-white/60 text-lg">
            Ferramentas e bibliotecas que impulsionam projetos modernos,
            rápidos e com alto impacto visual.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map(({ name, Icon, color }, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 hover:scale-105 transition duration-300"
            >
              <Icon className={`mx-auto text-5xl mb-4 ${color}`} />
              <p className="font-semibold mt-2">{name}</p>
            </div>
          ))}
        </div>

      </section>

      {/* CONTATO */}
      <section
        id="contact"
        className="relative z-10 px-6 md:px-20 py-24 text-center"
      >

        <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 shadow-2xl">

          <h3 className="text-5xl font-black mb-6">
            Vamos criar algo incrível.
          </h3>

          <p className="text-white/60 text-lg mb-10">
            Disponível para projetos freelance,
            landing pages premium e experiências interativas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">

            <Link href="/contato" className="px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition duration-300 text-center">
              Entrar em Contato
            </Link>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

