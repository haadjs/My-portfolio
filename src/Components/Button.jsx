import React from "react";
import { FaGithub } from "react-icons/fa"; // You can import any icon here

const Button = ({ title, icon: Icon, link }) => {
  const content = (
    <span className="flex items-center gap-2">
      {Icon && <Icon className="text-xl" />}
      {title}
    </span>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline btn-success"
    >
      {content}
    </a>
  ) : (
    <button className="btn btn-outline btn-success">{content}</button>
  );
};

export default Button;
