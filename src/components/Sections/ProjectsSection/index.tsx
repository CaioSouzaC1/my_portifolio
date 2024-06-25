import Container from "../../Container";
import ProjectCard from "../../ProjectCard";
import TitleSection from "../../TitleSection";

const ProjectsSection = () => {

  const projects = [
    {
      title: "Marvel Next App",
      image: "../imgs/marvel.png",
      text: "Site feito com Next.JS para exibir informações sobre os personagens, quadrinhos e outros dados.",
      tec: "Next.Js, Typescript, React Query e Tailwind",
      link: "https://github.com/CaioSouzaC1/ntf",
      badge: "Frontend",
      preview: "https://marvel.caiosouza.dev/",
    },
    {
      title: "Futsal Web",
      image: "../imgs/futsal.png",
      text: "Aplicativo feito com Next.JS para consumir a api de futsal feita em Laravel.",
      tec: "Next.Js, Typescript e Tailwind",
      link: "https://github.com/CaioSouzaC1/futsal-web",
      badge: "Frontend",
    },
    {
      title: "Futsal Api Laravel",
      image: "../imgs/API.png",
      text: "Api de um sistema para gerenciar informações sobre jogadores, times e partidas de futsal.",
      tec: "Laravel",
      link: "https://github.com/CaioSouzaC1/futsal-api-laravel",
      badge: "Backend",
    },
    {
      title: "Futsal Api Node.js",
      image: "../imgs/API.png",
      text: "Api de um sistema para gerenciar informações sobre jogadores, times e partidas de futsal.",
      tec: "Node.js, Typescript, Prisma & Express",
      link: "https://github.com/CaioSouzaC1/futsal-api",
      badge: "Backend",
    },
    {
      title: "Notizia (Tema Wordpress)",
      image: "../imgs/Notizia.png",
      text: "Site que gera recomendações de animes a partir de um algoritomo que se baseia em obras que você já assistiu.",
      tec: "Wordpress, Javascript & Tailwind",
      badge: "Fullstack",
    },
    {
      title: "Anime Match",
      image: "../imgs/Anime.png",
      text: "Site que gera recomendações de animes a partir de um algoritomo que se baseia em obras que você já assistiu.",
      tec: "React, Javascript & Tailwind",
      link: "https://github.com/CaioSouzaC1/Anime-Match",
      badge: "Frontend",
      preview: "https://anime-match.vercel.app/",
    },
    {
      title: "React Pokedex",
      image: "../imgs/Pokedex.png",
      text: "Uma Pokedex, com funcionalidades de trocar de estilo das artes, seleção por geração e filtro.",
      tec: "React, Javascript & Tailwind",
      link: "https://github.com/CaioSouzaC1/ReactPokedex3",
      badge: "Frontend",
      preview: "https://benevolent-dolphin-4afc2a.netlify.app/",
    },
    {
      title: "Voice",
      image: "../imgs/Voice.png",
      text: "Plataforma de comunicação entre artistas e dono de estabelecimentos, com chat integrado e marcação de eventos.",
      tec: "React, Firebase & Tailwind",
      link: "https://github.com/CaioSouzaC1/TccEtec2023",
      badge: "Fullstack",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-zinc-950 to-neutral-800 py-4 min-h-sc flex items-center">
      <Container classNames="flex flex-wrap justify-around">
        <TitleSection title="Projetos" />
        <div className="w-full flex flex-wrap">
          {projects.map((e, i) => (
            <ProjectCard key={i} info={e} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
