"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between p-4 shadow-sm items-center rounded-lg">
      <div className="font-bold text-xl tracking-tight">MusicHub</div>
      <div>
        {!session?.user ? (
          <button
            className="px-4 py-2 bg-green-600 rounded-md text-white"
            onClick={() => signIn()}
          >
            Log In
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-red-600 rounded-md text-white"
            onClick={() => {
              alert("hi there");
              signOut();
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}
