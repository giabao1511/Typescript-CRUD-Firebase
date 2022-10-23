import React from "react";
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  children: string;
  styles?: React.CSSProperties;
};

const Button = (props: ButtonProps) => {
  return (
    <button style={props.styles} onClick={(e) => props.handleClick(e, 1)}>
      {props.children}
    </button>
  );
};

export default Button;
