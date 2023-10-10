import { useEffect } from "react";
import { useSightings } from "../../hooks/use.sightings";
import { SightingCard } from "../sighting.card/sighting.card";
import listStyle from "./list.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PropagateLoader } from "react-spinners";

export function List() {
  const { sightings, handleLoadSightings } = useSightings();
  const { getSightingsState } = useSelector(
    (state: RootState) => state.sightings
  );

  useEffect(() => {
    handleLoadSightings();
  }, [handleLoadSightings]);

  return (
    <>
      {getSightingsState === "loading" && (
        <PropagateLoader color="yellow" className={listStyle.spinner} />
      )}
      {getSightingsState === "loaded" && (
        <ul className={listStyle.sightings} role="list">
          {sightings.map((item) => (
            <SightingCard key={item.id} item={item}></SightingCard>
          ))}
        </ul>
      )}
    </>
  );
}
