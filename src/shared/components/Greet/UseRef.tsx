import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default UseRef;
