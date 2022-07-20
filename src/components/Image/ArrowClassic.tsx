import React, {useEffect, useState} from 'react';

import {Image} from '@mantine/core';
import {useSpring, animated} from "react-spring";
import Xarrow, {anchorType} from "react-xarrows";

interface ArrowClassicParams {
    start : string
    end : string
    endAnchor?: anchorType
    startAnchor?: anchorType
    color? : string
    animateDrawing? : boolean | number
    delay? : number
}

function ArrowClassic(props: ArrowClassicParams) {

    const [display, setDisplay] = useState(props.delay ? false : true);

    useEffect(() => {
        setTimeout(function() { //Start the timer
            setDisplay(true) //After 1 second, set render to true
        }, props.delay)
    }, [])


    return (
        <React.Fragment>
            {display ?
                <Xarrow
                    start={props.start}
                    end={props.end}
                    endAnchor={props.endAnchor}
                    startAnchor={props.startAnchor}
                    color={props.color}
                    animateDrawing={props.animateDrawing}
                />
            :
                <></>
            }

        </React.Fragment>
    );
}

export default ArrowClassic;