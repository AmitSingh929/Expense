import { useEffect, useState } from "react";

function useWindowSize(){
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(function(){
        const updateSize = function(){
            setSize([window.innerWidth, window.innerHeight])
        }
        
        // On Window resize call Update Size
        window.addEventListener('resize', updateSize)

        return function(){ window.removeEventListener('resize', updateSize)};
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
};

export default useWindowSize;