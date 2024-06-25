interface IProjectCard {
  title: string;
  image: string;
  text: string;
  tec: string;
  badge: string;
  preview?: string;
  link?: string;
}

interface IInfoCard {
  info: IProjectCard;
}

const ProjectCard = ({ info }: IInfoCard) => {
  const { image, title, text, tec, badge, preview, link } = info;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 text-center px-4 mb-20 lg:mb-8 relative">
      <img
        className="w-full h-40 object-cover rounded mb-4"
        src={image}
        alt={title}
      />
      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold absolute top-4 right-8 bg-black/80 hover:bg-black/80">
        {badge}
      </div>
      <div className="min-h-48 mb-8">
        <p className="font-bold mb-4 border-b border-b-sky-500 text-2xl inline-block">
          {title}
        </p>
        <p className="text-left mb-4">{text}</p>
        <p className="text-left mb-8">
          Tecnologias: (<span className="font-medium text-sky-500">{tec}</span>
          ).
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {link && (
          <a
            className="grid-cols-1 px-4 py-2 h-12 bg-stone-900 border border-black flex items-center justify-center rounded-md shadow-2xl font-bold hover:bg-stone-800 transition-all"
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            Repósitório
          </a>
        )}

        {preview && (
          <a
            className="grid-cols-1 px-4 py-2 h-12 bg-stone-900 border border-black flex items-center justify-center rounded-md shadow-2xl font-bold hover:bg-stone-800 transition-all"
            href={preview}
            target="_blank"
            rel="noopener noreferrer">
            Preview
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
