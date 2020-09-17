import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const Hamburger = ({ toggle }) => {
  const [opened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(!opened);
    toggle((prevState) => !prevState);
  };
  return (
    <HamburgerMenu
      isOpen={opened}
      menuClicked={handleClick}
      width={35}
      height={24}
      strokeWidth={2}
      rotate={0}
      color='white'
      borderRadius={0}
      animationDuration={0.5}
    />
  );
};

export default Hamburger;
