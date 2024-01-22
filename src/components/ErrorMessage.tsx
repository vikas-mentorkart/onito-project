import React from "react";
interface Props {
  message: String;
}
const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <span className="text-red-500">{message}</span>;
};

export default ErrorMessage;
