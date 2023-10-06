import loginStyle from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { SyntheticEvent, useEffect } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const { handleLoginUser, loginError } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const loginFormElement = event.target as HTMLFormElement;
    const loggedUser = {
      user: (loginFormElement.elements.namedItem("user") as HTMLInputElement)
        .value,
      password: (
        loginFormElement.elements.namedItem("password") as HTMLInputElement
      ).value,
    };

    if (loggedUser.user === "" || loggedUser.password === "") {
      Swal.fire({
        width: "20em",
        icon: "error",
        title: "ERROR",
        text: "ALL INPUTS ARE REQUIRED",
        background:
          "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
        color: "white",
        iconColor: "yellow",
        showConfirmButton: false,
        padding: "4em 0",
        timer: 2000,
      });
      return;
    }

    handleLoginUser(loggedUser);
    loginFormElement.reset();
  };

  useEffect(() => {
    if (loginError === null) {
      return;
    }

    if (loginError) {
      Swal.fire({
        width: "20em",
        icon: "error",
        title: "ERROR",
        text: "INVALID USERNAME OR PASSWORD",
        background:
          "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
        color: "white",
        iconColor: "yellow",
        showConfirmButton: false,
        padding: "4em 0",
        timer: 2000,
      });
    }

    if (loginError === false) {
      Swal.fire({
        width: "25em",
        icon: "success",
        title: "WELCOME",
        text: "AS A WISE PERSON ONCE SAID: \n\n“IF IT IS JUST US, SEEMS LIKE AN AWFUL WASTE OF SPACE”",
        background:
          "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
        color: "white",
        iconColor: "yellow",
        showConfirmButton: false,
        padding: "4em 0",
        timer: 3500,
      });

      navigate("/");
    }
  }, [loginError, navigate]);

  return (
    <>
      <section className={loginStyle.login}>
        <form
          onSubmit={handleSubmit}
          className={loginStyle.loginForm}
          aria-label="form"
        >
          <h2>LOGIN</h2>
          <div>
            <input
              type="user"
              id="user"
              name="user"
              placeholder="USER/EMAIL"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="PASSWORD"
              autoComplete="off"
            />
          </div>
          <div className={loginStyle.button}>
            <button type="submit">SEND</button>
          </div>
        </form>
      </section>
    </>
  );
}
