import Container from "../Container";

const NameSection = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-4 h-sc flex items-center">
      <Container>
        {/* <img
        className="w-64 drop-shadow-lg"
        src="../../../src/assets/img/Removal-469.png"
      /> */}
        <div className="ml-8">
          <p className="text-lg mb-4">👋🏻 Olá, prazer, eu sou</p>
          <h1 className="text-slate-50 text-5xl font-bold">
            Caio César de Souza
          </h1>
          <h2 className="text-2xl">Desenvolvedor Backend </h2>
          <a
            href="https://github.com/CaioSouzaC1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 mt-8 mr-4 bg-gradient-to-r from-stone-700 to-stone-800  inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/caiocesardesouza2003/"
            target="_blank"
            className="px-8 py-4 mt-8 mr-4 bg-gradient-to-r from-sky-600 to-sky-700  inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br"
            rel="noopener noreferrer">
            Linkedin
          </a>
        </div>
      </Container>
    </div>
  );
};

export default NameSection;
