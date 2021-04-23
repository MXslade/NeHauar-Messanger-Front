import React, { useState, useRef } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";

interface Props
  extends React.DOMAttributes<HTMLInputElement>,
    React.HTMLAttributes<HTMLInputElement> {}

export const SearchBar: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState<string>("");

  const handleClearClick = () => {
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex relative">
      <input
        ref={inputRef}
        className={`w-full bg-search rounded focus:outline-none px-2 py-1 text-sm placeholder-text-secondary text-white ${
          props.className ? props.className : ""
        }`}
        placeholder="Search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {value && (
        <Button
          icon={faTimes}
          className="absolute right-5 inset-y-0"
          onClick={handleClearClick}
        />
      )}
    </div>
  );
};
