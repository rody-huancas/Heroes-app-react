import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui/components/Navbar";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-[1200px] mx-auto mt-5 px-5">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
