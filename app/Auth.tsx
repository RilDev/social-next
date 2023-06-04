"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Auth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center">
        <Image
          src={session.user?.image ?? ""}
          alt="User profile picture"
          height={40}
          width={40}
          className="mr-1"
        ></Image>
        <button
          className="px-2 py-1 text-blue-500 bg-white rounded"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      className="px-2 py-1 text-blue-500 bg-white rounded"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
}
