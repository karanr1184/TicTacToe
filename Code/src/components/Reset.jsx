import React from 'react';
import "./Reset.css";

function Reset(e) {
  function handleReset(){
    window.location.reload();
  }

  return (
    <>
        <button id="resetbtn" onClick={handleReset}>
            Reset
        </button>
    </>
  )
}

export default Reset;