interface ITecItem {
  title: string;
  fill: string;
  d: string;
}

const TecItem = ({ title, fill, d }: ITecItem) => {
  return (
    <div className="flex gap-4 mb-4 py-2 border-b border-l px-4 border-sky-300 w-full">
      <svg
        width={24}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>{title}</title>
        <path fill={`${fill}`} d={`${d}`} />
      </svg>
      <p className="font-medium">{title}</p>
    </div>
  );
};
export default TecItem;
