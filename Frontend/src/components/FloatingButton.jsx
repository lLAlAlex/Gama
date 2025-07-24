import React from "react";
import { useMenuStore } from "../store/menuStore";

const FloatingButton = () => {
  const openMenu = useMenuStore((state) => state.openMenu);

  return (
    <button
      onClick={openMenu}
      className="
        fixed bottom-4 right-4 z-50 bg-blue-600 text-white 
      w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg
      hover:bg-blue-700 transition-colors duration-300
      "
    >
      +
    </button>
  );
};

export default FloatingButton;
