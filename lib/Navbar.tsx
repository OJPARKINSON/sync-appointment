import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

export default function Navbar({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <nav
      className="absolute right-0 w-full flex items-center justify-between md:justify-end px-4 h-16"
      aria-label="Navbar"
    >
      <button
        type="button"
        className="inline-flex md:hidden items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true);
        }}
        className={`${
          loading
            ? "bg-gray-200 border-gray-300"
            : "bg-black hover:bg-white border-black"
        } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
      >
        {"Log in with GitHub"}
      </button>
    </nav>
  );
}
