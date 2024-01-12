import Container from "../Container";

const Header = () => {
  return (
    <header className="bg-zinc-800 sticky top-0 w-full h-14 flex items-center z-10 border-b border-zinc-700">
      <Container classNames="flex justify-between">
        <p className="text-xl">
          <span className="font-black">C</span>aio
          <span className="font-black">S</span>ouza
          <span className="font-bold">!</span>
        </p>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Sobre</li>
          <li>Habilidades</li>
          <li>Diferenciais</li>
          <li>Portifólio</li>
          <li>Contato</li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
