import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styles from "./Telemedicine.module.css";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TeleNavbar() {
  const { data: session }: any = useSession();

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <article>
        <header className="flex items-center justify-between mb-8">
          <Link href="/">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.jpg"
                alt="Health Guardian Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {!session ? (
              <></>
            ) : (
              <>
                {/* Session User should display instead */}
                <h1 className="text-2xl">Welcome {session.user?.email} !</h1>
              </>
            )}
          </nav>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="w-12 h-12 relative">
                  <Image
                    src="/user.png"
                    alt="profilePic"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full cursor-pointer"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#045357] focus:outline-none p-2 rounded-full bg-[#b2dfdb] hover:bg-[#80cbc4] transition"
              >
                {menuOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </header>
        {menuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 mb-8">
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                About
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                Academy
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="text-[#045357] hover:text-[#033d40] transition">
                Features
              </a>
            </Link>
          </nav>
        )}
      </article>
    </>
  );
}
