function useDebounce(callback, delay=1000) {
  let timerID;
  return (...args)=>{
    clearTimeout(timerID);
    timerID=setTimeout(() => {
      callback(...args);
    }, delay);
  }
}

export default useDebounce;