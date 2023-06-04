import Link from "next/link";
import Auth from "./Auth";

export default function Nav() {
  return (
    <nav className="flex justify-between px-6 py-4 text-white bg-blue-500 border-b shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          SOCIAL NEXT
        </Link>
      </div>
      <ul className="flex items-center space-x-3">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Auth />
        </li>
      </ul>
    </nav>
  );
}
