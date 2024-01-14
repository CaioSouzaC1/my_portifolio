import Container from "../../Container";
import Lottie from "react-lottie";
import animationData from "../../../assets/img/melottie.json";
const NameSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-zinc-950 to-neutral-800 py-4 min-h-sc flex items-center pb-12 lg:pb-0">
      <Container classNames="flex flex-wrap justify-around">
        <div className="mt-12 lg:mt-0">
          <p className="text-2xl mb-4">👋🏻 Olá, prazer, eu sou</p>
          <h1 className="text-slate-50 text-5xl font-bold">
            Caio César de Souza
          </h1>
          <h2 className="text-2xl mb-4" title="Front também se necessário">
            Desenvolvedor Backend 🔗
          </h2>
          <h3>
            Estudando Dev desde 2020, atuando profissionalmente desde 2022. 🚀
          </h3>
          <a
            href="https://github.com/CaioSouzaC1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 mt-12 mr-4 bg-gradient-to-r from-stone-700 to-stone-800  inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/caiocesardesouza2003/"
            target="_blank"
            className="px-8 py-4 mt-12 mr-4 bg-gradient-to-r from-sky-600 to-sky-700  inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br"
            rel="noopener noreferrer">
            Linkedin
          </a>
        </div>
        <div>
          <div className="mt-8 lg:-mt-8 max-w-[400px] w-full max-h-[400px] h-full">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NameSection;
