import Search from "../Search";

export default function Header() {
  return (
    <header className="h-fit w-full">
      <h1 className="text-2xl text-center font-bold"> IP Address Tracker </h1>
      <Search />
    </header>
  );
}
