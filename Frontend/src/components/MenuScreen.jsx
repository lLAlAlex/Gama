import { useMenuStore } from "../store/menuStore";
import React from 'react'

const MenuItem = ({ icon, label, position, onClick }) => (
  <div 
    className={`
      absolute 
      flex flex-col items-center gap-2 
      text-white font-semibold text-sm
      transition-all duration-300 ease-in-out
      ${position}
    `}
  >
    <button 
      onClick={onClick}
      className="
        w-16 h-16 rounded-full 
        flex items-center justify-center 
        bg-white/20 backdrop-blur-md 
        border border-white/30 
        shadow-lg
        hover:bg-white/30 hover:scale-105 active:scale-95
        transition-all duration-200
      "
    >
      {/* Placeholder for icon */}
      <span className="text-3xl">{icon}</span>
    </button>
    <span>{label.toUpperCase()}</span>
  </div>
);

const Menu = () => {
  const isOpen = useMenuStore((state) => state.isOpen);

  if (!isOpen) return null;

  return (
    // <div
    //   className="
    //     fixed inset-0 z-100 
    //     bg-green-400/50 backdrop-blur-sm
    //     transition-opacity duration-300 ease-in-out
    //     opacity-100"
    // >
    //   <div className="relative w-full h-full">
    //     <MenuItem 
    //       icon="📱" 
    //       label="Pokedex" 
    //       position="bottom-[24rem] right-1/2 translate-x-1/2" 
    //       onClick={onPokedexClick}
    //     />
    //     <MenuItem 
    //       icon="🛍️" 
    //       label="Shop" 
    //       position="bottom-[16rem] right-1/2 translate-x-1/2" 
    //       onClick={onShopClick}
    //     />
    //     <MenuItem 
    //       icon="🐾" 
    //       label="Pokémon" 
    //       position="bottom-24 right-[10rem]" 
    //       onClick={onPokemonClick}
    //     />
    //     <MenuItem 
    //       icon="🎒" 
    //       label="Bag" 
    //       position="bottom-24 right-24" 
    //       onClick={onBagClick}
    //     />
    //   </div>
    // </div>
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
          onClick={closeMenu}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          menu bos!
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This is a clean and user-friendly modal. You can customize the content here to suit your needs.
        </p>
      </div>
    </div>
    
  );
};

export default Menu;
