import { Music, UsersRound, Vote } from "lucide-react";
import Appbar from "../components/Appbar";
import { Button } from "@/components/ui/button";
import { Redirect } from "../components/Redirect";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Appbar />
      <Redirect />
      <div>
        <div className="flex justify-center h-64 items-center flex-col gap-y-3">
          <h3 className="font-bold text-3xl">
            Play and Enjoy you Music together
          </h3>
          <p className="text-md text-gray-600">
            Create and Add your friends to have music together
          </p>
          <Button className="px-4 py-2 bg-green-600 rounded-md text-white">
            {" "}
            Get Started
          </Button>
        </div>
        <div className="text-center font-bold tracking-tight text-3xl mt-4">
          Key Features
        </div>
        <div className="flex gap-2 p-4">
          <div className="flex flex-col items-center h-52 justify-around w-1/3 bg-purple-500 rounded-md text-white gap-y-2">
            <Music className="h-16 w-12" />
            <h3 className="text-xl font-bold">High-Quality Audio</h3>
            <p className="text-gray-200">Crystal clear sound quality.</p>
          </div>
          <div className="flex flex-col items-center h-52 justify-around w-1/3 bg-purple-500 rounded-md text-white gap-y-2">
            <Vote className="h-16 w-12" />
            <h3 className="text-xl font-bold">Upvote Your Fav</h3>
            <p className="text-gray-200">
              Play music that has the most upvotes
            </p>
          </div>
          <div className="flex flex-col items-center h-52 justify-around w-1/3 bg-purple-500 rounded-md text-white gap-y-2">
            <UsersRound className="h-16 w-12" />
            <h3 className="text-xl font-bold">Collaborative Approach</h3>
            <p className="text-gray-200">Add your friends to the space</p>
          </div>
        </div>
      </div>
      <footer className="h-12 flex items-end justify-center">
        <p className="font-semibold">&copy; all rights reserved</p>
      </footer>
    </main>
  );
}
