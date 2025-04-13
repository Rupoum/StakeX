"use client";
import React from "react";
import { RiGamepadLine, RiLiveLine } from "@remixicon/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PopularGames = () => {
  const [status, setStatus] = React.useState("Live");
  return (
    <>
      <main>
        <h1 className="text-xl font-bold flex items-center gap-3 text-white">
          <RiGamepadLine size={30} color="red" />
          Popular Games
        </h1>
        <div></div>
      </main>
      <div className="mt-10">
        <Card className="w-96 border-2 border-red-500 bg-transparent text-white shadow-[0_0_15px_5px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_10px_rgba(255,0,0,0.7)] transition-shadow duration-300 ease-in-out">
          <CardHeader className="">
            <div className="flex justify-between">
              <div>Match Name</div>
              <div
                className="bg-red-600 px-3 ro
              unded-xl flex items-center gap-2 "
              >
                <RiLiveLine size={10} /> {status}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div>Team A</div>
            <div>Team B</div>
          </CardContent>
          <CardFooter className="flex justify-around">
            <Button variant={"destructive"}> Place a bet</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default PopularGames;
