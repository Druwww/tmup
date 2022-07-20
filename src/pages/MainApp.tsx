import React from 'react';

import {AppShell, Header} from '@mantine/core';
import HeaderBar from "../components/HeaderBar";
import {Route, Routes, Navigate} from "react-router-dom";
import Welcome from "./Welcome";

function MainApp() {

    return (
        <React.Fragment>
            <AppShell
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed
                padding="md"
                header={<Header height={70}  p="xs"><HeaderBar /></Header>}
                /**footer={<Footer height={60} p="xs"> Application footer </Footer>}*/
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >

                <Routes>
                    <Route path="/" element={<Welcome />}/>
                </Routes>

            </AppShell>
        </React.Fragment>
    );
}

export default MainApp;
