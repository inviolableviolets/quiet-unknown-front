import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error.page/error.page";
const LoginPage = lazy(() => import("../pages/login.page/login.page"));
const Home = lazy(() => import("../home/home"));
const FormPage = lazy(() => import("../pages/form.page/form.page"));
const ModifyPage = lazy(() => import("../pages/modify.page/modify.page"));
const DetailsPage = lazy(() => import("../pages/details.page/details.page"));
const SubmissionsPage = lazy(
  () => import("../pages/submissions.page/submissions.page")
);

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/form" element={<FormPage></FormPage>}></Route>
        <Route path="/edit/:id" element={<ModifyPage></ModifyPage>}></Route>
        <Route
          path="/submissions"
          element={<SubmissionsPage></SubmissionsPage>}
        ></Route>
        <Route path="details/:id" element={<DetailsPage></DetailsPage>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
