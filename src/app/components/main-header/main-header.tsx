import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../assets/MPPps3IA_400x400.jpg";

export default function MainHeader() {
  return (
    <header className="flex flex-row justify-around items-center bg-indigo-900">
      <div className="basis-1/4">
        <Image src={LogoImg} width={100} height={100} alt="Kamimo" />
      </div>
      <nav className="basis-1/3">
        <ul className="flex flex-row justify-around">
          <li className="text-2xl">
            <Link className="" href="/protocol-stats">
              Protocol Stats
            </Link>
          </li>
          <li className="text-2xl">
            <Link href="/dex-pool">DEX pool</Link>
          </li>
          <li className="text-2xl">
            <Link href="/trader">Trader</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
