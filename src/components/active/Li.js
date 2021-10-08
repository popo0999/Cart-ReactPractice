import React from 'react';

const Li = (props) => {
  return (
    <li>
      <a
        onClick={(e) => {
          e.preventDefault();
          console.log(e.target);
          props.setData(props.name);
          props.setActive(props.id);
        }}
        className={props.active === props.id ? 'active' : ''}
        href="/"
      >
        {props.name}
      </a>
    </li>
  );
};

export default Li;
