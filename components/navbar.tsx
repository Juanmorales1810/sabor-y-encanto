"use client";

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { WhatsAppLogo } from "./icons";
import NextLink from "next/link";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-primary" isBlurred={false} maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
                <NavbarBrand as="li" className="gap-3 max-w-fit md:pl-56">
                    <NextLink
                        className="flex justify-start items-center"
                        href="/"
                    >
                        <Image src="/logo-peru/PERU 1.png" alt="Logo Peru" width={60} height={30} />
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium text-zinc-50 font-bold uppercase"
                                )}
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                {/* <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem> */}
                <NavbarItem className="hidden sm:flex gap-2">
                    <Button
                        className="font-medium"
                        as={Link}
                        isExternal
                        color="secondary"
                        href={`https://wa.me/+56987060388?text=Hola!%20Me%20gustaria%20hacer%20una%20reserva.%20Tenes%20alguna%20reservacion%20disponible?%20Muchas%20gracias!😊`}
                        endContent={<WhatsAppLogo />}
                    >
                        Reserva por WhatsApp
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                {/* <ThemeSwitch /> */}
                <Button
                    className="font-medium"
                    as={Link}
                    isExternal
                    color="secondary"
                    href={`https://wa.me/+56987060388?text=Hola!%20Me%20gustaria%20hacer%20una%20reserva.%20Tenes%20alguna%20reservacion%20disponible?%20Muchas%20gracias!😊`}
                    endContent={<WhatsAppLogo />}
                >
                    Reserva
                </Button>
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link color="primary" onClick={() => { setIsMenuOpen(false) }} href={item.href} size="lg">
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
