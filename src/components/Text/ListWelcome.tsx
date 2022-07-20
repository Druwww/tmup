import React from 'react';
import {List} from "@mantine/core";

interface ListWelcomeParams {
    id?: string
    data : string[]
}

function ListWelcome(props:ListWelcomeParams) {

    return (
        <React.Fragment>

                <List id={props.id} style={{textAlign:"left"}} size="lg" >
                    {props.data.map((elem, num) =>
                        <List.Item key={elem + num}>
                                {elem}
                        </List.Item>
                    )}
                </List>
        </React.Fragment>
    );
}

export default ListWelcome;