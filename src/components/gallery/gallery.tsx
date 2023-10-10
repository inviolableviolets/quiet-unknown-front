import { Link } from "react-router-dom";
import galleryStyle from "./gallery.module.scss";
import { List } from "../list/list";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useSightings } from "../../hooks/use.sightings";
import { SyntheticEvent } from "react";
import { TfiWorld } from "react-icons/tfi";

export function Gallery() {
  const { token } = useSelector((state: RootState) => state.users);
  const { next, previous } = useSelector((state: RootState) => state.sightings);
  const { handlePaging, loadFiltered, handleLoadSightings } = useSightings();

  const handleFilter = (event: SyntheticEvent) => {
    const element = event.target as HTMLButtonElement;
    if (element.name === "region") {
      const filter = `region=${element.value}`;
      loadFiltered(filter);
    }
  };

  const handleLoadNext = () => {
    const url = next;
    if (!url) return;
    handlePaging(url);
  };

  const handleLoadPrevious = () => {
    const url = previous;
    if (!url) return;
    handlePaging(url);
  };

  return (
    <>
      <div className={galleryStyle.galleryContainer}>
        {previous ? (
          <button
            className={galleryStyle.galleryController}
            onClick={handleLoadPrevious}
          >
            &#60;
          </button>
        ) : (
          <button
            className={galleryStyle.galleryControllerDisabled}
            onClick={handleLoadPrevious}
            disabled
          >
            &#60;
          </button>
        )}

        <div className={galleryStyle.gallery}>
          <List />
        </div>

        {next ? (
          <button
            className={galleryStyle.galleryController}
            onClick={handleLoadNext}
          >
            &#62;
          </button>
        ) : (
          <button
            className={galleryStyle.galleryControllerDisabled}
            onClick={handleLoadNext}
            disabled
          >
            &#62;
          </button>
        )}
      </div>
      <div>
        <span className={galleryStyle.tellus} onClick={handleLoadPrevious}>
          {!token ? (
            <>
              <Link className={galleryStyle.signup} to="/login">
                SIGN UP
              </Link>{" "}
              {"AND "}
            </>
          ) : (
            ""
          )}
          TELL US YOUR STORY
        </span>
        <section className={galleryStyle.filterContainer}>
          <div className={galleryStyle.filter}>
            <span
              className={galleryStyle.showAll}
              onClick={handleLoadSightings}
            >
              <TfiWorld />
            </span>
            <button
              className={galleryStyle.europe}
              onClick={handleFilter}
              name="region"
              value="Europe"
              role="button"
              aria-label="Europe filter button"
            ></button>
            <button
              className={galleryStyle.asia}
              onClick={handleFilter}
              name="region"
              value="Asia"
              role="button"
              aria-label="Asia filter button"
            ></button>
            <button
              className={galleryStyle.america}
              onClick={handleFilter}
              name="region"
              value="America"
              role="button"
              aria-label="America filter button"
            ></button>
            <button
              className={galleryStyle.oceania}
              onClick={handleFilter}
              name="region"
              value="Oceania"
              role="button"
              aria-label="Oceania filter button"
            ></button>
            <button
              className={galleryStyle.africa}
              onClick={handleFilter}
              name="region"
              value="Africa"
              role="button"
              aria-label="Africa filter button"
            ></button>

            {token ? (
              <>
                <Link to="/form" className={galleryStyle.add}>
                  +
                </Link>
              </>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </>
  );
}
