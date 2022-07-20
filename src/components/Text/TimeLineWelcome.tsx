import React from 'react';
import {Center, Text, Timeline} from "@mantine/core";
import {useXarrow} from "react-xarrows";

interface TimelineWelcomeParams {
    id?: string,
    data : {
        title : string,
        text : string
    }[],
    reverse? : true,
    color? : string
}

function TimeLineWelcome(props:TimelineWelcomeParams) {

    const updateXarrow = useXarrow()

    return (
        <React.Fragment>
            <Center>
                <Timeline id={props.id} color={props.color ? props.color : "yellow"} align={props.reverse ? "right" : "left"} active={props.data.length}>
                    {props.data.map((elem, num) =>
                        <Timeline.Item title={elem.title} bulletSize={24} key={elem.title + num}>
                            <Text color="dimmed" size="sm">
                                {elem.text}
                            </Text>
                        </Timeline.Item>
                    )}
                </Timeline>
            </Center>
        </React.Fragment>
    );
}

export default TimeLineWelcome;