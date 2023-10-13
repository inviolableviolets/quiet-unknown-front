import { ComeBack } from "../../come.back/come.back";
import detailsPageStyle from "./details.page.module.scss";
import { useParams } from "react-router-dom";
import { Sighting } from "../../../models/sighting";
import { useSightings } from "../../../hooks/use.sightings";

export default function DetailsCard() {
  const { id } = useParams();
  const { sightings } = useSightings();

  const item = sightings.find((sighting) => sighting.id === id) as Sighting;

  return (
    <>
      <ComeBack></ComeBack>
      {item && (
        <div className={detailsPageStyle.details}>
          <section className={detailsPageStyle.image}>
            <img src={item.image.url} alt={`${item.title} sighting.`} />
          </section>
          <section className={detailsPageStyle.data}>
            <div>
              <h2>{item.title}</h2>
              <span>Submission by @{item.owner.userName}</span>
              <span>
                Spotted in {item.region} in {item.year}
              </span>
            </div>
            <div>
              <h2>What happened?</h2>
              <span className={detailsPageStyle.description}>
                {item.description}
              </span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
