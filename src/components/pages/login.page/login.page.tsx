import { ComeBack } from "../../come.back/come.back";
import Register from "../../register/register";
import Login from "../../login/login";
import loginPageStyle from "./login.page.module.scss";
export default function LoginPage() {
  return (
    <>
      <ComeBack></ComeBack>
      <div className={loginPageStyle.loginPageContainer}>
        <section className={loginPageStyle.forms}>
          <Register></Register>
          <Login></Login>
        </section>
      </div>
    </>
  );
}
