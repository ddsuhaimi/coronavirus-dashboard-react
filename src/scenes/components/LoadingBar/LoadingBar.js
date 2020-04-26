import React from "react";

export default function LoadingBar({ message }) {
  return (
    <>
      <p>{message}</p>
      <progress class="progress is-small is-primary" max="100">
        15%
      </progress>{" "}
    </>
  );
}
