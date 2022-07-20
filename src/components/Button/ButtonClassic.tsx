import React from 'react';

import {Button} from '@mantine/core';
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";

interface ButtonClassicParams {
    id ?: string
    name : string,
    color ?: string,
    action() : any
}

function ButtonClassic(props: ButtonClassicParams) {

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Button id={props.id} color={props.color ? props.color : "orange"} onClick={props.action}>
                {props.name}
            </Button>
        </React.Fragment>
    );
}

export default ButtonClassic;