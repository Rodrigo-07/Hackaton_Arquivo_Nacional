import React from "react";

function ArchiveCard({ id, title, image, subtitle, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className="md:w-2/5 w-2/4 flex justify-center" onClick={handleClick}>
      <div className="flex flex-col md:p-10 p-4 m-4 hover:cursor-pointer bg-slate-100 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md">
        {image && <img src={image} alt="Placeholder" className="mb-2 object-cover" />}
        {title && <div className="font-semibold text-gray-800 text-2xl mb-2">{title}</div>}
        {subtitle && <div className="font-regular text-gray-700 text-base">{subtitle}</div>}
      </div>
    </div>
  );
}

export default ArchiveCard;
