import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseEffectLayout = () => {

    const divRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        console.log("use effect called");
        inputRef.current.value = 'John';
    },[]);

    useLayoutEffect(() => {
        console.log("use layout effect called");
        const getDivRefCurrent = divRef.current;
        console.log(getDivRefCurrent);

        getDivRefCurrent.style.opacity = 0;

        setTimeout(() => {
            getDivRefCurrent.style.opacity = 1;
            getDivRefCurrent.style.color = "tomato";
        },1000);

        console.log(inputRef.current);
    },[])

  return (
    <div>
        <h>Use Layout Effect</h>
        <div ref={divRef}>Hello World</div>
        <input ref={inputRef} type="text" value="Karthi"/>
    </div>
  )
}

export default UseEffectLayout