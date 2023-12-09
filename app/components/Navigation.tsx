import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { ModeToggle } from "./ModeToggle";

export const Navigation = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">BALANCE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Diagrams
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ModeToggle />
      </NavbarContent>
    </Navbar>
  )
}
