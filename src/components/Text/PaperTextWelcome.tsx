// @ts-ignore
import React, {useEffect} from 'react';
import {Paper, Text} from "@mantine/core";
import {useSpring, animated} from "react-spring";
import {useXarrow} from "react-xarrows";

interface PaperTextWelcomeParams {
    id? : string
    data : string
    color?: string
    animated?: string
}

function PaperTextWelcome(props:PaperTextWelcomeParams) {

    const updateXarrow = useXarrow()

        const animation = useSpring({
            from: {x: 0},
            to: {x: props.animated ? (props.animated.localeCompare("left") ? 100 : -100) : 0},
            delay: 2000,
            onChange: () => updateXarrow()
        })


    useEffect(() =>{
        updateXarrow();
    }, [])

    return (
        <React.Fragment>
            <animated.div style={props.animated ? {...animation} : {}}>
                <Paper
                    id={props.id}
                    shadow="sm"
                    p="md"
                    sx={(theme) => ({
                        backgroundColor: props.color,
                    })}

                >
                    <Text weight={700} >
                        {props.data}
                    </Text>
                </Paper>
            </animated.div>
        </React.Fragment>
    );
}

export default PaperTextWelcome;