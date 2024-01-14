import Container from "../Container";

const Header = () => {
  return (
    <header className="bg-zinc-800 sticky top-0 w-full h-14 flex items-center z-10 border-b border-zinc-700">
      <Container classNames="flex justify-between">
        <p className="text-xl">
          <span className="font-black">CaioSouza</span> 🚀
        </p>
        <ul className="lg:flex gap-4 hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>Contato</li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
