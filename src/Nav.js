import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ dogs_names }) {
  return (
    <nav>
      <ul>
        {dogs_names.map(name => (
          <li key={name}>
            <NavLink exact to={`/dogs/${name.toLowerCase()}`}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
