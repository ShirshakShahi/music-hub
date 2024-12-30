import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Appbar from "../../components/Appbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <Appbar />
      <div className="md:grid grid-cols-5 px-52 gap-2">
        <div className="md:min-h-screen w-auto col-span-3">
          <h2 className="font-bold text-xl p-4">Upcoming Songs</h2>

          <div>
            <Card className="rounded-md p-4 mt-2">
              <CardContent className="md:flex">
                <div className="flex-">
                  <Image src={""} alt="thumbnail w-24 h-24" />
                </div>
                <div className="flex flex-col gap-y-4">
                  <CardTitle>Some Video Title</CardTitle>
                  <div>
                    <Button className="bg-gray-500">
                      <Heart />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-pink-900 min-h-screen w-auto col-span-2">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl p-4">Add a Song</h2>
            <Button>
              <Share2 /> Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
