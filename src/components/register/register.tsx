import registerStyle from "./register.module.scss";
import { SyntheticEvent } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";
import Swal from "sweetalert2";

export default function Register() {
  const { handleRegisterUser } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const registerFormElement = event.target as HTMLFormElement;
    const data = {
      userName: (
        registerFormElement.elements.namedItem("username") as HTMLInputElement
      ).value,
      email: (
        registerFormElement.elements.namedItem("email") as HTMLInputElement
      ).value,
      password: (
        registerFormElement.elements.namedItem("passwd") as HTMLInputElement
      ).value,
    } as unknown as Partial<User>;

    if (data.userName === "" || data.email === "" || data.password === "") {
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
    } else {
      handleRegisterUser(data);
      registerFormElement.reset();
      Swal.fire({
        width: "20em",
        icon: "success",
        title: "SIGNED UP",
        text: "NOW WE NEED YOU TO FILL THE LOGIN FORM",
        background:
          "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
        color: "white",
        iconColor: "yellow",
        showConfirmButton: false,
        padding: "4em 0",
        timer: 3000,
      });
    }
  };

  return (
    <>
      <div className={registerStyle.register}>
        <form
          onSubmit={handleSubmit}
          className={registerStyle.registerForm}
          aria-label="form"
        >
          <h2>SIGN UP</h2>
          <div>
            <input
              type="text"
              id="username"
              placeholder="USERNAME"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              type="text"
              id="email"
              placeholder="EMAIL"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              type="password"
              id="passwd"
              placeholder="PASSWORD"
              autoComplete="off"
            />
          </div>
          <div className={registerStyle.button}>
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </>
  );
}
