interface IProjectCard {
  title: string;
  image: string;
  text: string;
  tec: string;
  link?: string;
}

const ProjectCard = ({ title, image, text, tec, link }: IProjectCard) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 text-center px-4 mb-20 lg:mb-8">
      <img
        className="w-full max-h-48 object-cover rounded mb-4"
        src={image}
        alt={title}
      />
      <div className="min-h-48">
        <p className="font-bold mb-4 border-b border-b-sky-500 text-2xl inline-block">
          {title}
        </p>
        <p className="text-left mb-4">{text}</p>
        <p className="text-left mb-8">
          Tecnologias: (<span className="font-medium text-sky-500">{tec}</span>
          ).
        </p>
      </div>
      {link && (
        <a
          className="px-8 py-4 bg-gradient-to-r from-stone-800 to-stone-900 border border-sky-500 inline-block rounded-xl shadow-2xl font-bold hover:bg-gradient-to-br"
          href={link}
          target="_blank"
          rel="noopener noreferrer">
          Ver repósitório
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
