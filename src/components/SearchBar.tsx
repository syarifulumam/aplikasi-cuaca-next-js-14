import { loadingCityAtom, placeAtom } from "@/app/atom";
import axios from "axios";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { IoMdCloseCircle, IoMdSearch } from "react-icons/io";

interface SearchResponse {
  count: number;
  list: any[];
}

type Props = {};

export default function SearchBar({}: Props) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [place, setPlace] = useAtom(placeAtom);
  const [_, setLoadingCity] = useAtom(loadingCityAtom);

  const handleSubmiSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoadingCity(true);
    e.preventDefault();
    try {
      const response = await axios.get<SearchResponse>(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      if (response.data.count !== 0) {
        setPlace(response.data.list[0].name);
        setLoadingCity(false);
      } else {
        toast.error("Location not found");
        setError("Location not found");
        setLoadingCity(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="">
      <div>
        <form className="flex items-center" onSubmit={handleSubmiSearch}>
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <IoMdSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="voice-search"
              className="peer text-gray-900 text-sm block w-full pl-10 p-2.5 
             outline-0 "
              placeholder="Search Jakarta, Tokyo, etc..."
              required
            />
            <button
              type="button"
              className="hidden peer-focus:flex absolute inset-y-0 right-0 items-center px-3"
            >
              <IoMdCloseCircle className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900" />
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </form>
        <Toaster />
      </div>
    </nav>
  );
}
