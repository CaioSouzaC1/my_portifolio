import Container from "../../Container";
import TitleSection from "../../TitleSection";

const ContactSection = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-t from-zinc-950 to-neutral-800 py-4 flex items-center border-b-2 border-zinc-700 pb-24">
      <Container classNames="flex flex-wrap justify-around">
        <TitleSection title="Contato" />
        <div className="w-full flex flex-wrap justify-center  ">
          <div className="w-full md:w-1/2 lg:w-1/4 text-center">
            <a
              href="https://github.com/CaioSouzaC1"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-48 text-center px-8 py-4 mt-12 mr-4 bg-gradient-to-r from-stone-700 to-stone-800  inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br">
              Github
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 text-center">
            <a
              href="https://www.linkedin.com/in/caiocesardesouza2003/"
              target="_blank"
              className="min-w-48 text-center px-8 py-4 mt-12 mr-4 bg-gradient-to-r from-sky-600 to-sky-700 inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br"
              rel="noopener noreferrer">
              Linkedin
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 text-center">
            <a
              href="https://whatsa.me/5519988506448/?t=Ol%C3%A1%20Caio."
              target="_blank"
              className="min-w-48 text-center px-8 py-4 mt-12 mr-4 bg-gradient-to-r from-green-600 to-[#25D366] inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br"
              rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 text-center">
            <a
              href="mailto:caiocsouza2010@gmail.com"
              target="_blank"
              className="min-w-48 text-center px-8 py-4 mt-12 mr-4 bg-gradient-to-r from-red-600 to-[#EA4335] inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br"
              rel="noopener noreferrer">
              Email
            </a>
          </div>
          <p className="font-black text-xl lg:text-3xl mb-8 mt-16 text-center">
            Obrigado pela visita 🚀
          </p>
        </div>
      </Container>
    </section>
  );
};
export default ContactSection;
