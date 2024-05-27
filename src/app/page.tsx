"use client";
import React, { useEffect } from "react";
// warna #114094 #022a6d
import "swiper/css";
import SearchBar from "@/components/SearchBar";
import HeroForecast from "@/components/HeroForecast";
import TimeForecast from "@/components/TimeForecast";
import WeeklyForecast from "@/components/WeeklyForecast";
import axios from "axios";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { loadingCityAtom, placeAtom } from "./atom";
import Skeleton from "@/components/Skeleton";

interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}
interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function page() {
  const [place, setPlace] = useAtom(placeAtom);
  const [loadingCity] = useAtom(loadingCityAtom);

  const { isLoading, error, data, refetch } = useQuery<WeatherData>(
    "repoData",
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
      );
      return data;
    }
  );
  const dataCuacaSekarang = data?.list[0];
  const dataCuacaMingguan = data?.list.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) => t.dt_txt.split(" ")[0] === value.dt_txt.split(" ")[0]
      )
  );
  useEffect(() => {
    refetch();
  }, [place, refetch]);
  if (isLoading) return <Skeleton />;
  if (error)
    return (
      <div className="flex items-center min-h-screen justify-center">
        {/* @ts-ignore */}
        <p className="text-red-400">{error.message}</p>
      </div>
    );
  return (
    <div className="bg-[#0a3785] min-h-screen text-white w-full pb-5">
      <div className="container max-w-5xl mx-auto">
        <SearchBar />
        {/* content */}
        {loadingCity ? (
          <Skeleton />
        ) : (
          <main>
            <HeroForecast
              location={data?.city.name}
              tanggal={dataCuacaSekarang?.dt_txt}
              temp={dataCuacaSekarang?.main.temp}
              temp_max={dataCuacaSekarang?.main.temp_max}
              temp_min={dataCuacaSekarang?.main.temp_min}
              feels_like={dataCuacaSekarang?.main.feels_like}
              iconName={dataCuacaSekarang?.weather[0].main}
            />
            {/* perjam */}
            <TimeForecast data={data} />
            <WeeklyForecast data={dataCuacaMingguan} />
          </main>
        )}
      </div>
    </div>
  );
}
