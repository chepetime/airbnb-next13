import { User } from "@prisma/client";

import Container from "@/components/Container";
import Logo from "@/components/navbar/Logo";
import Search from "@/components/navbar/Search";
import UserMenu from "@/components/navbar/UserMenu";
import Categories from "@/components/navbar/Categories";

interface NavbarProps {
  currentUser?: User | null;
}

export default function Navbar({ currentUser }: NavbarProps) {
  return (
    <div className="fixed w-full bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-1
            "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}
