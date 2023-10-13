import { ComeBack } from "../../come.back/come.back";
import { SyntheticEvent } from "react";
import { useSightings } from "../../../hooks/use.sightings";
import modifyStyle from "./modify.page.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Sighting } from "../../../models/sighting";

import Swal from "sweetalert2";

export enum RegionEnum {
  America = "America",
  Asia = "Asia",
  Europe = "Europe",
  Africa = "Africa",
  Ocenia = "Oceania",
}

export default function ModifyPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { userSubmissions } = useSelector((state: RootState) => state.users);
  const { handleEditSighting, handleDeleteSighting, sightings } =
    useSightings();

  const sighting: Sighting = userSubmissions?.find(
    (item: Sighting) => item.id === id
  ) as Sighting;

  const sightingFull: Sighting = sightings.find(
    (item: Sighting) => item.id === id
  ) as Sighting;

  const handleDelete = () => {
    if (id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "SURE?",
          text: "YOUR HISTORY WILL BE FORGOTTEN",
          icon: "warning",
          background:
            "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
          color: "white",
          iconColor: "yellow",
          showCancelButton: true,
          padding: "4em 0",
          confirmButtonText: "✓",
          cancelButtonText: "X",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "DELETED",
              text: "YOUR SIGHTING HAS BEEN DELETED",
              icon: "success",
              background:
                "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
              color: "white",
              iconColor: "yellow",
              showConfirmButton: false,
              padding: "4em 0",
              timer: 2000,
            });
            handleDeleteSighting(sightingFull.id);
            navigate("/");
          } else result.dismiss === Swal.DismissReason.cancel;
        });
    }
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const editSightingForm = event.target as HTMLFormElement;

    const titleValue = (
      editSightingForm.elements.namedItem("title") as HTMLInputElement
    ).value;
    const yearValue = Number(
      (editSightingForm.elements.namedItem("year") as HTMLInputElement).value
    );
    const regionValue = (
      editSightingForm.elements.namedItem("region") as HTMLInputElement
    ).value as keyof typeof RegionEnum;
    const descriptionValue = (
      editSightingForm.elements.namedItem("description") as HTMLInputElement
    ).value;

    const sightingData: Partial<Sighting> = {
      id: sighting.id,
      title: titleValue,
      year: yearValue,
      region: RegionEnum[regionValue],
      description: descriptionValue,
    };

    await handleEditSighting(sightingData);
    Swal.fire({
      width: "20em",
      icon: "success",
      text: "SUCCESSFULLY EDITED",
      background: "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
      color: "white",
      iconColor: "yellow",
      showConfirmButton: false,
      padding: "4em 0",
      timer: 1000,
    });
    navigate("/");
  };

  return (
    <>
      <ComeBack></ComeBack>
      <div className={modifyStyle.modifyPageContainer}>
        <section className={modifyStyle.form}>
          <form
            className={modifyStyle.sightingForm}
            onSubmit={handleSubmit}
            aria-label="form"
          >
            <section>
              <div>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={sighting.title}
                  placeholder="TITLE"
                  autoComplete="off"
                />
              </div>

              <div>
                <input
                  type="number"
                  id="year"
                  name="year"
                  defaultValue={sighting.year}
                  placeholder="YEAR"
                  minLength={4}
                  maxLength={4}
                  autoComplete="off"
                />
              </div>

              <select name="region" id="region" defaultValue={sighting.region}>
                <option value="Europe">EUROPE</option>
                <option value="Asia">ASIA</option>
                <option value="America">AMERICA</option>
                <option value="Africa">AFRICA</option>
                <option value="Oceania">OCEANIA</option>
              </select>

              <div>
                <textarea
                  name="description"
                  id="description"
                  defaultValue={sighting.description}
                  rows={15}
                  cols={20}
                  maxLength={300}
                  minLength={10}
                  placeholder="Have you remembered something new?"
                />
              </div>
            </section>
            <section className={modifyStyle.send}>
              <img
                className={modifyStyle.types}
                src="/form-transformed.png"
                alt="UFO types"
              />
              <div className={modifyStyle.controls}>
                <div className={modifyStyle.deleteButton}>
                  <button type="button" onClick={handleDelete}>
                    DELETE
                  </button>
                </div>

                <div className={modifyStyle.button}>
                  <button type="submit">UPDATE</button>
                </div>
              </div>
            </section>
          </form>
        </section>
      </div>
    </>
  );
}
