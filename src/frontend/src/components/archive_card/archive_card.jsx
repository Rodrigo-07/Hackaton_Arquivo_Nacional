import React from "react";

import Imagem1 from '../../images/BR_RJANRIO_O2_0_FOT_0027_d0001vde0001.jpg';
import Imagem2 from '../../images/BR_RJANRIO_O2_0_FOT_0184_d0001de0001 (1).jpg';
import Imagem3 from '../../images/BR_RJANRIO_O2_0_FOT_0391_d0001de0001.jpg';
import Imagem4 from '../../images/BR_RJANRIO_PH_0_FOT_23005_001.jpg';

function ArchiveCard({ id, title, image, subtitle, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  const getImage = () => {
    switch (image) {
      case "Um":
        return Imagem1;
      case "Dois":
        return Imagem2;
      case "Tres":
        return Imagem3;
      case "Quatro":
        return Imagem4;
      default:
        return null;
    }
  };

  return (
    <div className="md:w-2/5 w-2/4 flex justify-center" onClick={handleClick}>
      <div className="flex flex-col md:p-10 p-4 m-4 hover:cursor-pointer bg-slate-100 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md">
        {image && <img src={getImage()} alt="Placeholder" className="mb-2 object-cover" />}
        {title && <div className="font-semibold text-gray-800 text-2xl mb-2">{title}</div>}
        {subtitle && <div className="font-regular text-gray-700 text-base">{subtitle}</div>}
      </div>
    </div>
  );
}

export default ArchiveCard;
