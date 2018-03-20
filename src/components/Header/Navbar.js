import React from 'react';
import PropTypes from 'prop-types';
import NavbarItems from './NavbarItem';
const Navbar = ({ menu }) => {
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          {menu.map(e =>
            <NavbarItems
              datostring={e}
              key={e}
            />
          )}
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
        <i className="fas fa-share-alt text-white"></i>

          </div>

      </nav>
    </div>

  )
}

Navbar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Navbar