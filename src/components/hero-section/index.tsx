import { FlipWords } from "../ui/flip-words";

export default function HeroSection() {
  const words = ["FullStack", "Frontend", "Backend", "Devops"];

  return (
    <div className="h-[30rem] flex justify-center flex-col gap-2">
      <div className="text-4xl lg:text-7xl w-full font-normal relative">
        Desenvolvedor
        <FlipWords
          className="!text-primary max-w-full block lg:inline px-0 lg:px-4"
          duration={2000}
          words={words}
        />
        <br className="hidden lg:block" />
        Caio César de Souza. <br />
      </div>
      <span className="text-lg font-light">
        Estudando Dev desde 2020, atuando profissionalmente desde 2022.
      </span>
    </div>
  );
}
