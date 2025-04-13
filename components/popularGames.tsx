"use client";
import React, { useState } from "react";
import { RiGamepadLine, RiLiveLine } from "@remixicon/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PopularGames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const games = [
    {
      id: 1,
      name: "Game 1",
      teamA: "Team A1",
      teamB: "Team B1",
      status: "Live",
    },
    {
      id: 2,
      name: "Game 2",
      teamA: "Team A2",
      teamB: "Team B2",
      status: "Over",
    },
    {
      id: 3,
      name: "Game 3",
      teamA: "Team A3",
      teamB: "Team B3",
      status: "Live",
    },
  ];

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <main className="flex justify-between">
        <h1 className="text-xl font-bold flex items-center gap-3 text-white">
          <RiGamepadLine size={30} color="red" />
          Popular Games
        </h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md border bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </main>
      <div className="mt-10 flex gap-10 flex-wrap ">
        {filteredGames.map((game) => (
          <Card
            key={game.id}
            className="w-96 border-2 border-red-500 bg-transparent text-white shadow-[0_0_15px_5px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_10px_rgba(255,0,0,0.7)] transition-shadow duration-300 ease-in-out mb-4"
          >
            <CardHeader>
              <div className="flex justify-between">
                <div>{game.name}</div>
                <div className="bg-red-600 px-3 rounded-xl flex items-center gap-2">
                  <RiLiveLine size={10} /> {game.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div>{game.teamA}</div>
              <div>{game.teamB}</div>
            </CardContent>
            <CardFooter className="flex justify-around">
              <Button variant={"destructive"}>Place a bet</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PopularGames;
