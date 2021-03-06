import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLoginData } from '../../contexts/LoginDataContext';
import '../Screen.scss';

function ImputFiles({
  onChange, src, alt, name,
}) {
  const { id } = useParams();
  const { loginData } = useLoginData();
  return (
    <>
      {loginData?.userId === parseInt(id, 10) ? <input className="input-file" type="file" name={name} onChange={onChange} /> : src && <img className="profile-images" src={`http://localhost:5000/uploads/${src}`} alt={alt} />}
    </>
  );
}
ImputFiles.propTypes = {
  onChange: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImputFiles;
