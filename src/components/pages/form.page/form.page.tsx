import { ComeBack } from "../../come.back/come.back";
import SightingForm from "../../sighting.form/sighting.form";
import formPageStyle from "./form.page.module.scss";

export default function FormPage() {
  return (
    <>
      <ComeBack></ComeBack>
      <div className={formPageStyle.formPageContainer}>
        <h3> </h3>
        <SightingForm></SightingForm>
      </div>
    </>
  );
}
