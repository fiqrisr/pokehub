import { Link as NextUILink } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/navbar";
import { Link } from "@tanstack/react-router";

import { ThemeSwitcher } from "@/components";

export const Navbar = () => {
  return (
    <NextUINavbar shouldHideOnScroll isBordered>
      <NavbarBrand className="gap-3">
        <NextUILink
          as={Link}
          to="/"
          className="flex gap-4 items-center justify-center"
        >
          <p className="font-bold text-foreground text-xl">PokeHub</p>
        </NextUILink>
      </NavbarBrand>
      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </NextUINavbar>
  );
};
