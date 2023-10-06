import { useEffect } from "react";
import { useSightings } from "../../hooks/use.sightings";
import { SightingCard } from "../sighting.card/sighting.card";
import submissionsStyle from "./submissions.module.scss";
import { useUsers } from "../../hooks/use.users";
import { Sighting } from "../../models/sighting";

export function Submissions() {
  const { handleLoadSightings } = useSightings();
  const { userSubmissions } = useUsers();

  useEffect(() => {
    handleLoadSightings();
  }, [handleLoadSightings]);

  const submissions = userSubmissions as Sighting[];

  return (
    <ul className={submissionsStyle.submissions} role="list">
      {submissions.map((item) => (
        <SightingCard key={item.id} item={item}></SightingCard>
      ))}
    </ul>
  );
}
