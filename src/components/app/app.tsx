import { useEffect } from "react";
import { useSightings } from "../../hooks/use.sightings";
import { AppRoutes } from "../app.routes/app.routes";
import "./app.module.scss";

export default function App() {
  const { handleLoadSightings } = useSightings();
  useEffect(() => {
    handleLoadSightings();
  }, [handleLoadSightings]);

  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}
