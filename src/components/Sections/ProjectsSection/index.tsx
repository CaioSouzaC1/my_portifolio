import Container from "../../Container";
import ProjectCard from "../../ProjectCard";
import TitleSection from "../../TitleSection";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-zinc-950 to-neutral-800 py-4 min-h-sc flex items-center">
      <Container classNames="flex flex-wrap justify-around">
        <TitleSection title="Projetos" />
        <div className="w-full flex flex-wrap">
          <ProjectCard
            title="Futsal Api Laravel"
            image="../imgs/API.png"
            text="Api de um sistema para gerenciar informações sobre jogadores, times e partidas de futsal."
            tec="Laravel"
            link="https://github.com/CaioSouzaC1/futsal-api-laravel"
          />
          <ProjectCard
            title="Futsal Api Node.js"
            image="../imgs/API.png"
            text="Api de um sistema para gerenciar informações sobre jogadores, times e partidas de futsal."
            tec="Node.js, Typescript, Prisma & Express"
            link="https://github.com/CaioSouzaC1/futsal-api"
          />
          <ProjectCard
            title="Notizia (Tema Wordpress)"
            image="../imgs/Notizia.png"
            text="Site que gera recomendações de animes a partir de um algoritomo que se baseia em obras que você já assistiu."
            tec="Wordpress, Javascript & Tailwind css"
          />
          <ProjectCard
            title="Anime Match"
            image="../imgs/Anime.png"
            text="Site que gera recomendações de animes a partir de um algoritomo que se baseia em obras que você já assistiu."
            tec="React, Javascript & Tailwind css"
            link="https://github.com/CaioSouzaC1/Anime-Match"
          />
          <ProjectCard
            title="React Pokedex"
            image="../imgs/Pokedex.png"
            text="Uma Pokedex, com funcionalidades de trocar de estilo das artes, seleção por geração e filtro."
            tec="React, Javascript & Tailwind css"
            link="https://github.com/CaioSouzaC1/ReactPokedex3"
          />
          <ProjectCard
            title="Voice"
            image="../imgs/Voice.png"
            text="Plataforma de comunicação entre artistas e dono de estabelecimentos, com chat integrado e marcação de eventos."
            tec="React, Firebase & Tailwind css"
            link="https://github.com/CaioSouzaC1/TccEtec2023"
          />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
