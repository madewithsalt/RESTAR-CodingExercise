import * as React from 'react';

const useMountedState = () => {
  const mountedRef = React.useRef<boolean>(false);

  // Basically the same as "useDidMount" because it has no dependencies
  React.useEffect(() => {
    mountedRef.current = true;

    return () => {
      // The cleanup function of useEffect is called by React on unmount
      mountedRef.current = false;
    };
  }, []);

  return React.useCallback(() => mountedRef.current, []);
};

export default useMountedState;
