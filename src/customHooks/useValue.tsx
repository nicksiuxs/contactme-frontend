import { useState } from "react";

const useValue = () => {
  const [value, setValue] = useState("");
  return { value };
};

export default useValue;
