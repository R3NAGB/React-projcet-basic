import React from 'react';
import { MenuList } from "../helpers/MenuList";
import MenuItem from '../components/MenuItem';

const Menu = () => {
  return (
    <div className="p-6 px-30">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MenuList.map((item, index) => ( // ✅ Renamed "MenuItem" to "item" 
          <MenuItem 
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
