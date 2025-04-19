import React from "react";

const Button = ({
  title,
  icon: Icon,
  link,
  type = "button", // Default to 'button'
  className = "",  // Accept custom classes
}) => {
  const content = (
    <span className="flex items-center justify-center gap-2 font-medium">
      {Icon && <Icon className="text-lg" />}
      {title}
    </span>
  );

  const baseStyles =
    "px-4 py-2 rounded-md transition duration-300 " +
    className;

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={baseStyles}
    >
      {content}
    </a>
  ) : (
    <button type={type} className={baseStyles}>
      {content}
    </button>
  );
};

export default Button;
