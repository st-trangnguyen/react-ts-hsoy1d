import * as React from 'react';
import { render } from 'react-dom';

import './style.css';

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const handleChange = React.useCallback(({ target: { value: nextValue } }) => {
    setValue(nextValue);
  }, []);

  const vowels: number = React.useMemo(() => {
    const VOWELS: string = 'aeiou';
    return value
      .toLocaleLowerCase()
      .split('')
      .filter((letter) => VOWELS.includes(letter)).length;
  }, [value]);

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <p>Normal: {value}</p>
      <p>Uppercase: {value.toLocaleUpperCase()}</p>
      <p>Lowercase: {value.toLocaleLowerCase()}</p>
      <p>Reversed: {value.split('').reverse().join('')}</p>
      <p>
        Length: {value.length} character{value.length !== 1 ? 's' : ''}
      </p>
      <p>Vowels: {vowels}</p>
      <p>Consonants: {value.length - vowels}</p>
    </>
  );
};

render(<App />, document.getElementById('root'));
