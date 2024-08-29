import React from "react";
import img from "../assets/img.jpg";
export default function NotFound() {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <img src={img} alt='' />
    </div>
  );
}
