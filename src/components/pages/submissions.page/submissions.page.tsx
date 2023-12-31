import { useUsers } from "../../../hooks/use.users";
import { ComeBack } from "../../come.back/come.back";
import { Submissions } from "../../submissions/submissions";
import submissionsPageStyle from "./submissions.page.module.scss";

export default function SubmissionsPage() {
  const { currentUser } = useUsers();

  return (
    <>
      <ComeBack></ComeBack>
      <div className={submissionsPageStyle.submissionsPageContainer}>
        <h3>{currentUser}'s submissions</h3>
        <Submissions></Submissions>
      </div>
    </>
  );
}
