"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const session = useSession();

  return (
    <div className="flex justify-between p-4">
      <div>MusicHub</div>
      <div>
        {session?.data?.user ? (
          <button
            className="px-4 py-2 bg-blue-400 rounded-md"
            onClick={() => signIn()}
          >
            Log In
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-blue-400 rounded-md"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}
