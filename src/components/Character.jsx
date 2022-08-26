const Character = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-items-center items-center lg:bg-slate-800 p-5 rounded-lg ">
      <h2 className="text-white">{name}</h2>
      <img className="mt-5 rounded-full" src={image} alt={name} />
    </div>
  );
};
export default Character;
