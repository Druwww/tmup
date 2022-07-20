import React from 'react';

import {Button} from '@mantine/core';
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";

interface ButtonNavigationParams {
    name : string,
    path : string
}

function ButtonNavigation(props: ButtonNavigationParams) {

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Button variant="subtle" onClick={() => navigate(props.path)}>
                    {t(props.name)}
            </Button>
        </React.Fragment>
    );
}

export default ButtonNavigation;