import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 mb-5">
        {heroes.map((heroe) => (
          <HeroCard key={heroe.id} {...heroe} />
        ))}
      </div>
    </>
  );
};
