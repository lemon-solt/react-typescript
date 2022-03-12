import React, { useState } from "react";

// type Props = {
//   message: string;
//   children: React.ReactNode;
// };

export const Child: React.FC = () => {
  const [state, setState] = useState<string>("");
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <div>
      <p>{state}</p>
      <input type="text" value={state} onChange={handleMessage} />
    </div>
  );
};
