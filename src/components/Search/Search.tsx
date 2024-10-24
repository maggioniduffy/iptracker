import Image from "next/image";
import arrow from "../../../public/images/icon-arrow.svg";

export default function Search() {
  return (
    <div className="w-fit flex justify-between h-12 mt-8 shadow-xl">
      <input className="w-56 rounded-l-xl bg-foreground"></input>
      <button className="w-12 bg-background rounded-r-xl">
        <Image src={arrow} alt="Search" className="m-auto" />
      </button>
    </div>
  );
}
