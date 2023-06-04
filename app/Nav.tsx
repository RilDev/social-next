import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between px-6 py-4 text-white bg-blue-500 border-b shadow-sm">
      <div>
        <Link href="/" className="text-lg font-bold">
          SOCIAL
        </Link>
      </div>
      <ul className="flex space-x-3">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
