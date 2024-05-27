import Image from "next/image";
import React from "react";

type Props = { iconName: string; width: number; height: number };

export default function WeatherIcon({ iconName, width, height }: Props) {
  const getIcon = () => {
    switch (iconName) {
      case "Drizzle":
        return "sun rain.svg";
      case "Rain":
        return "rain.svg";
      case "Snow":
        return "snow.svg";
      case "Clear":
        return "Sun.svg";
      case "Clouds":
        return "sun clouds.svg";
      default:
        return "sun.svg";
    }
  };

  return (
    <div>
      <Image src={getIcon()} alt={""} width={width} height={height} />
    </div>
  );
}
