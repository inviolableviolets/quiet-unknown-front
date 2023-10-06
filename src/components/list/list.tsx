import { useEffect } from "react";
import { useSightings } from "../../hooks/use.sightings";
import { SightingCard } from "../sighting.card/sighting.card";
import listStyle from "./list.module.scss";

export function List() {
  const { sightings, handleLoadSightings } = useSightings();

  useEffect(() => {
    handleLoadSightings();
  }, [handleLoadSightings]);

  return (
    <ul className={listStyle.sightings} role="list">
      {sightings.map((item) => (
        <SightingCard key={item.id} item={item}></SightingCard>
      ))}
    </ul>
  );
}
