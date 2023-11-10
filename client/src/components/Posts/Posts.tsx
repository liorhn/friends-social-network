import axios from "axios";
import React from "react";
import { config } from "../../config/config";

export const Posts = () => {
  const onClick = () => {
    axios
      .post(
        `${config.apiBase}/v1/posts`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <button onClick={onClick}>Click me</button>
    </>
  );
};
