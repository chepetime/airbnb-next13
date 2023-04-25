import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import UserMenu from "@/components/UserMenu";

export default function Navbar() {
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
              md:gap-0
            "
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}