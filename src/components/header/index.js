import React, { useEffect } from "react";
import LinkNext from 'next/link'
import Image from 'next/image'

import {Navbar, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Link, Button} from "@nextui-org/react";

import {PetStoreLogo} from '../../assets/pet-store-logo.jsx'

import style from '../../css/main.module.css'


function Header() {
  useEffect(() => {
    document.title = 'Pet store';
  }, []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Accueil",
    "A propos",
  ];

    return (
        <header className={style.header_content}>
            <title>Pet store</title>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <PetStoreLogo />

          <p className="font-bold text-inherit">Pet Store</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            A propos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
{}
    </header>
    )
}

export default Header