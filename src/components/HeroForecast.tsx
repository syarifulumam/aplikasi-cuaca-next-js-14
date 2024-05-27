import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React from "react";
import WeatherIcon from "./WeatherIcon";

type Props = {
  location?: string;
  tanggal?: string;
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  iconName?: string;
};

export default function HeroForecast({
  location,
  tanggal,
  temp,
  temp_max,
  temp_min,
  feels_like,
  iconName,
}: Props) {
  return (
    <div className="bg-white bg-opacity-20 rounded-lg py-5 pr-5 mt-2 ">
      <div className="ml-5">
        <p className="font-bold text-2xl">CUACA HARI INI</p>
        <p className="font-semibold text-lg">
          {location} ({format(parseISO(tanggal ?? ""), "EEEE")} ,{" "}
          {format(parseISO(tanggal ?? ""), "dd-MM-yyyy")})
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="flex w-full justify-center md:justify-start pl-5 pt-4  items-center">
          <WeatherIcon
            iconName={iconName ? iconName : ""}
            width={200}
            height={200}
          />
          <div className="">
            <p className="font-semibold text-6xl">
              {convertKelvinToCelsius(temp ?? 296.37)}°
            </p>
            <p>Feels like {convertKelvinToCelsius(feels_like ?? 0)}°</p>
          </div>
        </div>
        <div className="flex w-full justify-center md:justify-end gap-4">
          <div className="flex flex-col">
            <span className="text-center">Min</span>
            <p className="font-semibold text-5xl">
              ↓{convertKelvinToCelsius(temp_min ?? 0)}°
            </p>
          </div>
          <div className="min-h-full border bg-white"></div>
          <div className="flex flex-col">
            <span className="text-center">Max</span>
            <p className="font-semibold text-5xl">
              ↑{convertKelvinToCelsius(temp_max ?? 0)}°
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
