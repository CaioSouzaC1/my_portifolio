import { useEffect, useState } from "react";
import Container from "../Container";
import { differenceInYears } from "date-fns";

const AboutSection = () => {
  const bornDate = new Date("2003-09-06");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calcYears = () => {
      const years = differenceInYears(new Date(), bornDate);
      setAge(years);
    };

    calcYears();
  }, []);

  return (
    <section
      id="about"
      className="bg-gradient-to-t from-stone-900 to-neutral-800 h-sc">
      <Container classNames="flex flex-wrap justify-around">
        <div className="w-full text-center">
          <h4 className="font-bold border-b border-sky-500 text-4xl inline-block mb-8">
            Sobre Mim
          </h4>
        </div>
        <div className="h-96 w-96 rounded-xl border-2 border-zinc-700 overflow-hidden pt-4 animate-move-up-down animate-moveUpDown">
          <img src="../../../src/assets/img/CaioPNG.png" alt="Caio Souza" />
        </div>
        <div className="w-1/2">
          <p className="mb-4 font-semibold text-lg">
            Caio César de Souza, {age} anos 🧓, praticamente casado 💍,
            corinthiano 🦅, programador 👨‍💻 e amante de tecnologia 🖥️.
          </p>
          <p className="mb-4 font-semibold text-lg">
            Concluí meu curso técnico de informática, tenho com experiência em
            desenvolvimento de portais de notícias, sistemas, apis etc.
          </p>
          <p className="mb-4 font-semibold text-lg">
            Atualmente atuo como Desenvolvedor Junior III, trabalhando somente
            com backend, focado em construção de apis para sistemas.
          </p>
          <p className="mb-4 font-semibold text-lg">
            Por ter trabalhado mais de 2 anos como vendedor, tenho experiência e
            facilidade para lidar diretamente com clientes, fazendo reuniões,
            levantamento de requisitos, expectativas etc. Tenho interesse pela
            liderança, isso é algo quqe habita em mim desde criança.
          </p>
          <p className="mb-4 font-semibold text-lg">
            Se você procura um desenvolvedor comprometido, dedicado e com uma
            forte vontade de crescer na área, sinta-se à vontade para entrar em
            contato comigo.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
