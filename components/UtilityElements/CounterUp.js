import React, { useState, useEffect, useRef } from 'react';

export default function CounterUp({ start = 0, end, className, speed = 10 }) {
  const [counterState, setCounterState] = useState(null);

  const [isIntersecting, setIsIntersecting] = useState();

  const ref = useRef(start);
  const myRef = useRef();

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setCounterState(end);
      setCounterState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, speed);
  };

  useEffect(() => {
    if (isIntersecting) {
      let isMounted = true;
      if (isMounted) updateCounterState();

      return () => (isMounted = false);
    }
  }, [end, start, isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <span ref={myRef} className={className}>
      {counterState}
    </span>
  );
}
