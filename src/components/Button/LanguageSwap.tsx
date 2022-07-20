import React from 'react';

import Flags from 'country-flag-icons/react/3x2'
import { ActionIcon } from '@mantine/core';
import {useTranslation} from "react-i18next";
import {useDocumentTitle} from "@mantine/hooks";
import {t} from "i18next";


function LanguageSwap() {

    const { i18n } = useTranslation();

    useDocumentTitle(t("Title Main Page"));

    return (
        <React.Fragment>
            <ActionIcon onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')} size="lg" variant="outline">
                {i18n.language === 'fr' ? <Flags.GB title="English"/> : <Flags.FR title="French"/>}
            </ActionIcon>
        </React.Fragment>
    );
}

export default LanguageSwap;