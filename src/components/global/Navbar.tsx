import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import { auth, signOut } from "@/auth";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
type Props = {};

const Navbar = async (props: Props) => {
  const session = await auth();
  //const user = await currentUser();
  return (
    <header className="fixed h-20 right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <Link className="flex items-center" href={"/mural"}>
          <p className="flex items-center text-lg">BLACK B</p>
          <Image
            src="/black cube.png"
            width={20}
            height={20}
            alt="logo"
            className="shadow-sm h-full"
          />
          <p className="flex items-center text-lg">X</p>
        </Link>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link className="flex items-center" href="#">
              Forms
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="#">
              Check List
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="#">
              POPS
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="#">
              Fluxograma
            </Link>
          </li>
        </ul>
      </nav>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={session?.user?.image || undefined} alt="avatar" />
            <AvatarFallback>
              {session?.user?.name?.split(" ")[0][0] +
                " " +
                session?.user?.name?.split(" ")[1][0]}
            </AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-40 z-[100]">
          <div className="flex flex-col w-full gap-2">
            <div className="w-full ">
              <Link
                className="flex w-full hover:bg-foreground hover:text-primary-foreground p-2 py-1 rounded-md"
                href={"/control-panel/dashboard"}
              >
                Settings
              </Link>
            </div>
            <div className="w-full ">
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button
                  className=" justify-start text-md"
                  variant={"popover"}
                  type="submit"
                >
                  Sair
                </Button>
              </form>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Navbar;
