import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex border-b-2 bg-slate-200 space-x-5 mb-5 p-3 h-14 items-center">
      <ul className="flex space-x-5">
        <Link href="/" className="mr-5">
          Next.js
        </Link>
        <Link href="/admin">Admin</Link>
        <Link href="/users">Users</Link>
        <Link href="/products">Products</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
