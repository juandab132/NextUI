// SearchIcon.jsx
import React from "react";

const SearchIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={props.size} // puedes ajustar el tamaño según sea necesario
      height={props.size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a7 7 0 107 7 7 7 0 00-7-7zm0 14a7 7 0 110-14 7 7 0 010 14z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20l-4.35-4.35" />
    </svg>
  );
};

export default SearchIcon;

  