import { useState } from "react";
import { Count } from "../components/count";

export const EffectContainer = () => {
  const [countDisplay, setCountDisplay] = useState<boolean>(true);

  return (
    <>
      {countDisplay && <Count />}
      <button className="bg-indigo-300 border rounded px-4 py-1" onClick={() => setCountDisplay(!countDisplay)}>
        toggle display count
      </button>
    </>
  );
};
