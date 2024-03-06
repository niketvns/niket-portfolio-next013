import { useGlobalContext } from "@/app/context/store";
import React, { FC } from "react";

type Props = {
  type: string;
  name: string;
  placeholder: string;
};

const Input: FC<Props> = (props): JSX.Element => {
  const { formData, inputChangeHandler } = useGlobalContext();

  return (
    <input
      className="border border-black/50 py-2 px-3 rounded text-black"
      {...props}
      onChange={inputChangeHandler}
      value={formData[props.name]}
    />
  );
};

export default Input;
