import React from 'react';
import '../Screen.scss';

function Personality() {
  const [play, setPlay] = React.useState(false);
  return (
    <button type="button" className="button personality" onClick={() => setPlay(!play)}>
      &#9654;
    </button>
  );
}

export default Personality;
