import React, { useContext } from 'react';

import { APIContext } from '../../contexts/APIContext';

export default function Level({ index }) {
  const { getLevel, setLevel } = useContext(APIContext);

  const level = getLevel(index);

  const decreaseLevel = () => {
    if (level > 1) {
      setLevel(index, level - 1);
    }
  }

  const increaseLevel = () => {
    if (level < 18) {
      setLevel(index, level + 1);
    }
  }

  const resetLevel = () => {
    setLevel(index, 1);
  }

  return (
    <div class="field has-addons">
      <p class="control">
        <button class="button" onClick={decreaseLevel}>
          <span>-</span>
        </button>
      </p>
      <p class="control">
        <button class="button" onClick={resetLevel} >
          <span>{level}</span>
        </button>
      </p>
      <p class="control">
        <button class="button" onClick={increaseLevel}>
          <span>+</span>
        </button>
      </p>
    </div>
  );
}