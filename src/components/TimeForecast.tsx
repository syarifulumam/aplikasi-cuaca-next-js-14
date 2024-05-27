import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import WeatherIcon from "./WeatherIcon";

type Props = { data: any };

export default function TimeForecast({ data }: Props) {
  return (
    <div className="flex justify-between gap-8 mt-2 w-full">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 16 },
          480: { slidesPerView: 4, spaceBetween: 16 },
          768: { slidesPerView: 6, spaceBetween: 14 },
          1024: { slidesPerView: 8, spaceBetween: 16 },
        }}
      >
        {data?.list.map((d: any, i: number) => (
          <SwiperSlide
            key={i}
            className="bg-white max-w-28 min-w-28 bg-opacity-20 rounded-lg text-center p-5"
          >
            <span>{format(parseISO(d.dt_txt), "h:mm a")}</span>
            <WeatherIcon iconName={d.weather[0].main} width={70} height={70} />
            <span>{convertKelvinToCelsius(d?.main.temp ?? 0)}°</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
