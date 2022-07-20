// @ts-ignore
import React, {useEffect} from 'react';
import {Paper, Text} from "@mantine/core";
import {useSpring, animated} from "react-spring";
import {useXarrow} from "react-xarrows";

interface PaperTextFixedWelcomeParams {
    id? : string
    data : string
    color?: string
}

function PaperTextFixedWelcome(props:PaperTextFixedWelcomeParams) {

    const updateXarrow = useXarrow()


    useEffect(() =>{
        updateXarrow();
    }, [])

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default PaperTextFixedWelcome;