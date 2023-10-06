import { ComeBack } from "../../come.back/come.back";
import errorPageStyle from "./error.page.module.scss";

export default function ErrorPage() {
  return (
    <>
      <ComeBack></ComeBack>
      <div className={errorPageStyle.errorPageContainer}>
        <h1>
          Error 404 <span>Error 404</span>
        </h1>
        <h2>Page not found //// please head back home</h2>
      </div>
    </>
  );
}
