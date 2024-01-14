interface ITitleSection {
  title: string;
}
const TitleSection = ({ title }: ITitleSection) => {
  return (
    <h4 className="font-bold border-b border-sky-500 text-4xl inline-block mb-8">
      {title}
    </h4>
  );
};

export default TitleSection;
