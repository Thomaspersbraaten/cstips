import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-cs-blue font-bold m-6 p-2 bg-sky-50 text-black flex flex-row gap-5">
      <Link href="/">Homeee</Link>
      <Link href="/keybinds">Keybinds</Link>
      <Link href="/utility">Utility</Link>
      <Link href="/keybinds">keybinds</Link>
    </nav>
  );
}
