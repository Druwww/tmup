import React from 'react';

import {Divider, Grid, Image, Title, Space, Center, useMantineTheme} from "@mantine/core";
import PaperTextWelcome from "../components/Text/PaperTextWelcome";
import pictures from "../assets/pictures/links.json";
import {useTranslation} from "react-i18next";
import ListWelcome from "../components/Text/ListWelcome";
import TimeLineWelcome from "../components/Text/TimeLineWelcome";
import FormWelcome from "../components/Form/FormWelcome";
import ImageAnimated from "../components/Image/ImageAnimated";
import ImageBandeau from "../components/Image/ImageBandeau";
import {Xwrapper} from "react-xarrows";
import ArrowClassic from "../components/Image/ArrowClassic";

function Welcome() {

    const {t} = useTranslation();
    const theme = useMantineTheme();

    return (
        <React.Fragment>
            Coucou
        </React.Fragment>
    );
}

export default Welcome;
