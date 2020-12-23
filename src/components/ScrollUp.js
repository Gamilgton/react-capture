import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollUp = () => {
    const {pathName} = useLocation();

    useEffect (()=> {
        window.scroll({
            top: 0,
            left: 0,
        })
    },[pathName]);
    return null;
}

export default ScrollUp;