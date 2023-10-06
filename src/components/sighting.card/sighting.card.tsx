import { Sighting } from "../../models/sighting";
import sightingCardStyle from "./sighting.card.module.scss";
import { Link, useLocation } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
type PropsType = {
  item: Sighting;
};

export function SightingCard({ item }: PropsType) {
  const location = useLocation();

  return (
    <li className={sightingCardStyle.card} data-testid="sighting-card">
      <Link to={location.pathname === "/" ? `details/${item.id}` : ""}>
        <section
          className={sightingCardStyle.cardData}
          style={{
            backgroundImage: `url(${item.image.url})`,
          }}
        >
          {location.pathname === "/" ? (
            <>
              <span className={sightingCardStyle.cardTitle}>{item.title}</span>
              <span className={sightingCardStyle.cardId}>
                @{item.owner.userName}
              </span>
            </>
          ) : (
            <>
              <div className={sightingCardStyle.submissionsControls}>
                <span className={sightingCardStyle.modify}>
                  <Link to={"/edit/" + item.id}>
                    <BsPencilSquare />
                  </Link>
                </span>
              </div>
            </>
          )}
        </section>
      </Link>
    </li>
  );
}
