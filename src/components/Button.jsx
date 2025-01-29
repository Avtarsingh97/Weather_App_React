import React from 'react';

const Button = (props) => {
  return(
    <button className="text-lg border-1 rounded-xl px-5 py-2 bg-blue-500 text-white hover:bg-blue-700 my-5 cursor-pointer" onClick={props.onClick} disabled={props.disabled}>{props.value} </button>
  );
};

export default Button;