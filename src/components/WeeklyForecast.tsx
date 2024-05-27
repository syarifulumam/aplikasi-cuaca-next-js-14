import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = { data: any };

export default function WeeklyForecast({ data }: Props) {
  return (
    <>
      <h2 className="font-bold text-2xl">CUACA MINGGU INI</h2>
      <div className="flex flex-wrap gap-2 ">
        {data?.map((d: any, i: number) => (
          <div
            key={i}
            className="flex-auto flex w-80 bg-white bg-opacity-20 rounded-lg p-5"
          >
            <Image src={"sun rain.svg"} alt={""} width={150} height={150} />
            <div className="flex flex-col w-full gap-5">
              <div className="leading-3">
                <p className="font-semibold text-2xl">
                  {format(parseISO(d.dt_txt ?? ""), "EEEE")}
                </p>
                <p className="text-sm leading-3">
                  {format(parseISO(d.dt_txt ?? ""), "dd-MM-yyyy")}
                </p>
              </div>
              <div className="flex justify-between w-full gap-4">
                <span className="font-semibold text-4xl lg:text-2xl">
                  ↓{convertKelvinToCelsius(d.main.temp_min ?? 0)}°
                </span>
                <span className="font-semibold text-4xl lg:text-2xl">
                  ↑{convertKelvinToCelsius(d.main.temp_max ?? 0)}°
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
