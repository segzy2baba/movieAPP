import React from 'react';

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label}) => {
  return (
    <div className={ 'text-white  cursor-pointer transition'}>
      {label}
    </div>
  )
}

export default NavbarItem;
