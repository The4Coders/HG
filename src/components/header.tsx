"use client";

import React, { useState } from "react";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import { NavItems } from "@/app/config";
export default function Header() {
  const navItems = NavItems();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-between">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        prefetch={false}
      >
        {/* logo image here */}
        <span className="w-8 h-8 border bg-accent rounded-full flex justify-center items-center">
          <Image
            src="/logo.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
        </span>

        <span className="text-xl font-bold">Health Guardian</span>
      </Link>

      <div className="ml-4 flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Avatar>
                <AvatarImage src="/user.jpg" alt="user-profile" />
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="link"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="sm:hidden"
        >
          <Menu className="flex sm:hidden" />
        </Button>

        {isNavOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute right-0 top-0 left-0 bg-white h-full shadow-lg p-5">
              <ul className="space-y-4">
                {navItems.map((item: any, idx: any) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex flex-row items-center gap-2"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
