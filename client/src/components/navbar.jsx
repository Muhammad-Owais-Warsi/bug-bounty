import React from "react";
import { useLocation } from "react-router-dom";
import {
    Navbar,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";

const paths = [
    { name: "Home", path: "/home" },
    { name: "Created", path: "/created" },
    { name: "Assigned", path: "/assigned" },
    { name: "Help & Feedback", path: "/help" }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
 
            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {paths.map(({ name, path }, index) => (
                    <NavbarItem key={`${name}-${index}`} isActive={location.pathname === path}>
                        <Link
                            href={path}
                            color={location.pathname === path ? "foreground" : "default"}
                        >
                            {name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>


   
            <NavbarMenu justify="end">
                {paths.map(({ name, path }, index) => (
                    <NavbarMenuItem key={`${name}-${index}`}>
                        <Link
                            className="w-full"
                            color={location.pathname === path ? "foreground" : "default"}
                            href={path}
                            size="lg"
                        >
                            {name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
