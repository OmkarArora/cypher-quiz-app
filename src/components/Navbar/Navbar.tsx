import React from "react";
import "./navbar.css";

type NavbarProps = {
  setActiveTheme?: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
};

export const Navbar = ({ name, setActiveTheme }: NavbarProps) => {
  return <nav className="nav">nav</nav>;
};
