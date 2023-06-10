import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, (val?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = useCallback(
    (val: boolean) => {
      setValue(typeof val === 'boolean' ? val : !value);
    },
    [value, setValue],
  );

  return [value, toggleValue];
};
