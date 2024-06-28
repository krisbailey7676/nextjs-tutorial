"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex border-b-2 bg-slate-200 space-x-5 mb-5 p-3 h-14 items-center">
      <ul className="flex space-x-5">
        <Link href="/" className="mr-5">
          Next.js
        </Link>
        <Link href="/admin">Admin</Link>
        <Link href="/users">Users</Link>
        <Link href="/products">Products</Link>
        {status === "loading" && <div>Loading...</div>}
        {status === "authenticated" && (
          <div>
            {session.user!.name}
            <Link href="/api/auth/signout" className="ml-3">
              Sign Out
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
