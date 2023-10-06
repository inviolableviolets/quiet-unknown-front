import { SyntheticEvent } from "react";
import { useSightings } from "../../hooks/use.sightings";
import formStyle from "./sighting.form.module.scss";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SightingForm() {
  const { handleCreateSighting } = useSightings();
  const navigate = useNavigate();
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const sightingForm = event.target as HTMLFormElement;
    const sightingData = new FormData(sightingForm);
    handleCreateSighting(sightingData);
    navigate("/");
    Swal.fire({
      width: "20em",
      icon: "success",
      text: "SUCCESSFULLY SUBMITTED",
      background: "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
      color: "white",
      iconColor: "yellow",
      showConfirmButton: false,
      padding: "4em 0",
      timer: 1000,
    });
  };

  return (
    <>
      <section className={formStyle.form}>
        <form
          className={formStyle.sightingForm}
          onSubmit={handleSubmit}
          aria-label="form"
        >
          <section>
            <div>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="TITLE"
                autoComplete="off"
              />
            </div>

            <div>
              <input
                type="number"
                id="year"
                name="year"
                placeholder="YEAR"
                minLength={4}
                maxLength={4}
                autoComplete="off"
              />
            </div>

            <div className={formStyle.selectors}>
              <label htmlFor="image">
                <BiImageAdd />
                &nbsp; IMAGE
              </label>
              <input type="file" name="image" id="image" />
              <select name="region" id="region" defaultValue={""}>
                <option value="" disabled>
                  REGION &nbsp; ▼
                </option>
                <option value="Europe">EUROPE</option>
                <option value="Asia">ASIA</option>
                <option value="America">AMERICA</option>
                <option value="Africa">AFRICA</option>
                <option value="Oceania">OCEANIA</option>
              </select>
            </div>

            <div>
              <textarea
                name="description"
                id="description"
                rows={15}
                cols={20}
                maxLength={300}
                minLength={10}
                placeholder="Don't be shy, tell us what you saw."
              />
            </div>
          </section>
          <section className={formStyle.send}>
            <img
              className={formStyle.types}
              src="/form-transformed.png"
              alt="UFO types"
            />
            <div className={formStyle.button}>
              <button type="submit">SEND</button>
            </div>
          </section>
        </form>
      </section>
    </>
  );
}
