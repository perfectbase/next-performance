import React from "react";

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { width = 24, height = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={width}
      height={height}
      {...rest}
    >
      <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 6.7011719 7 L 10.642578 12.632812 L 6.90625 17 L 8.2382812 17 L 11.240234 13.484375 L 13.697266 17 L 17.537109 17 L 13.351562 11.009766 L 16.773438 7 L 15.462891 7 L 12.759766 10.160156 L 10.552734 7 L 6.7011719 7 z M 8.5664062 7.9882812 L 10.052734 7.9882812 L 15.683594 16.011719 L 14.1875 16.011719 L 8.5664062 7.9882812 z"></path>
    </svg>
  );
};

export default XIcon;