import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>Resty</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header;