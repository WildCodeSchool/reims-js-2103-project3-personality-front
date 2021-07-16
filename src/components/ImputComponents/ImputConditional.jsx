import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLoginData } from '../../contexts/LoginDataContext';
import '../Screen.scss';

function ImputComponents({
  onChange, value, name, type,
}) {
  const { id } = useParams();
  const { loginData } = useLoginData();
  return (
    <>
      {loginData?.userId === parseInt(id, 10) ? <input className="input" type={type} name={name} onChange={onChange} value={value} /> : <p className="paragraphe">{value}</p>}
    </>
  );
}
ImputComponents.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ImputComponents;
