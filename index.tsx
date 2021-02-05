import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  inputPlaceholder?: string;
  className?: string;
  component?: "input" | "textarea";
}

const FloatingLabel = ({ component = "input", placeholder, inputPlaceholder, className = "", ...rest }: Props) => (
  <label
    className={`floating-label ${className} ${!!rest.value ? "floating" : ""}`}
    htmlFor={rest.id}
  >
    {React.createElement(component, { ...rest, placeholder: inputPlaceholder })}
    <span>{placeholder}</span>
  </label>
);

export default FloatingLabel;
