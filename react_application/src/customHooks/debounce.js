import { useRef, useCallback } from "react";

function useDebounce(fn, delay) {
    const timerRef=useRef();

    const debouncedFunction=useCallback(

      (...args)=>{
        clearTimeout(timerRef.current);
        timerRef.current=setTimeout(()=>{
          fn(...args);
        },delay);
      },[fn,delay]
    )
    return debouncedFunction;
}

export default useDebounce;
