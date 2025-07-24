import React from "react";
import { useMenuStore } from "../store/menuStore";

const FloatingButton = () => {
  const openMenu = useMenuStore((state) => state.openMenu);

  return (
    <div className="fixed inset-0 z-50">
      <button
        onClick={openMenu}
        className="
          fixed button-position z-50 text-black
          duration-300 text-3xl
        "
      >
        +
      </button>
    </div>
  );
};

export default FloatingButton;
