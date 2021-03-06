import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({datostring}) => (
     <h5 className="text-white">{datostring}</h5>
    )
NavbarItem.propTypes={
    datostring: PropTypes.string.isRequired
}
export default NavbarItem
