import React from 'react';

import {Group, Grid, Text, Avatar, Space, Divider} from '@mantine/core';

import {useTranslation} from "react-i18next";
import LanguageSwap from "./Button/LanguageSwap";
import DarkLightSwitch from "./Button/DarkLightSwitch";

import pictures from "../assets/pictures/links.json";
import ButtonNavigation from "./Button/ButtonNavigation";

function HeaderBar() {

    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Grid justify="space-between">
                <Grid.Col span={5}>
                    <Group spacing="xs" position="left">
                        <Avatar
                            src={pictures.Logo}
                            alt="it's me"
                            size="lg"
                        />
                        <Text
                            component="span"
                            align="center"
                            variant="gradient"
                            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                            size="xl"
                            weight={700}
                            style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                        >
                            {t("Share your passion")}
                        </Text>
                        <Space h="xl" />
                        <ButtonNavigation name={"Le concept"} path={"/welcome"}/>
                        <ButtonNavigation name={"Inscription"} path={"/signin"}/>
                    </Group>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Group spacing="xs" p="xs" position="right">
                        <DarkLightSwitch />
                        <LanguageSwap />
                    </Group>
                </Grid.Col>
            </Grid>

        </React.Fragment>
    );
}

export default HeaderBar;
