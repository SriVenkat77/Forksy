export const PopularCuisines = ({ image, title }) => {
  return (
    <div className="px-3 flex flex-col justify-center items-center">
      <img
        className="w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem] rounded-full object-cover object-center"
        src={image}
        alt={title}
      />
      <span className="py-2 font-semibold text-xs text-gray-100">
        {title.length>6?title.substring(0,5)+"...":title}</span>
    </div>
  );
};
