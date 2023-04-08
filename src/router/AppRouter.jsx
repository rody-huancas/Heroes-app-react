import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
