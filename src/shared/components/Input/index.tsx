import React from "react";
type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ handleChange }: InputProps) => {
  return <input onChange={handleChange} />;
};

export default Input;
