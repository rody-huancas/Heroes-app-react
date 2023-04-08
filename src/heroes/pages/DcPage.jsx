import { HeroeList } from "../components";

export const DcPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold uppercase mb-5">
        Héroes de <span className="text-indigo-500">Marvel</span>
      </h2>

      <HeroeList publisher={"DC Comics"} />
    </>
  );
};
