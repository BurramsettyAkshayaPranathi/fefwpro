import React from "react";

const Notification = ({ type, message }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded shadow-lg`}>
      {message}
    </div>
  );
};

export default Notification;
