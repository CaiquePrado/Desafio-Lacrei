import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HorizontalDivider } from "../components/HorizontalDivider";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <HorizontalDivider />
      <Footer />
    </>
  );
};
