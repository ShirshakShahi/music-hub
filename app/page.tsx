import { Headphones, Music } from "lucide-react";
import Appbar from "./components/Appbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Appbar />
      <div>
        <div className="flex justify-center h-64 items-center flex-col gap-y-3">
          <h3 className="font-bold text-3xl">
            Play and Enjoy you Music together
          </h3>
          <p className="text-md text-gray-600">
            Create and Add your friends to have music together
          </p>
          <button className="px-4 py-2 bg-green-600 rounded-md text-white">
            Get Started
          </button>
        </div>
        <div className="flex gap-2 p-4">
          <div className="flex flex-col items-center w-1/3 bg-purple-500 rounded-md text-white gap-y-4">
            <Music className="h-12 w-12" />
            <h3 className="text-xl font-bold">High-Quality Audio</h3>
            <p className="text-gray-400">Crystal clear sound quality.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
