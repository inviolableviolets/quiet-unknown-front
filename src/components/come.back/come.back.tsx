import comebackStyle from "./come.back.module.scss";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

export function ComeBack() {
  return (
    <>
      <header className={comebackStyle.comeback} id="header">
        <Link to={"/"} className={comebackStyle.logo}>
          <div>
            <ImHome />
          </div>
        </Link>
      </header>
    </>
  );
}
