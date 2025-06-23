import React from "react";

export const SmileyIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGSVGElement>
>(({ ...props }, ref) => {
  return (
    <svg {...props} ref={ref} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6517 11.6517C10.1872 13.1161 7.81282 13.1161 6.34835 11.6517M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9ZM7.125 7.125C7.125 7.47018 6.98509 7.75 6.8125 7.75C6.63991 7.75 6.5 7.47018 6.5 7.125C6.5 6.77982 6.63991 6.5 6.8125 6.5C6.98509 6.5 7.125 6.77982 7.125 7.125ZM6.8125 7.125H6.81875V7.1375H6.8125V7.125ZM11.5 7.125C11.5 7.47018 11.3601 7.75 11.1875 7.75C11.0149 7.75 10.875 7.47018 10.875 7.125C10.875 6.77982 11.0149 6.5 11.1875 6.5C11.3601 6.5 11.5 6.77982 11.5 7.125ZM11.1875 7.125H11.1938V7.1375H11.1875V7.125Z" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});
