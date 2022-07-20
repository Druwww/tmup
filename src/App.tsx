import React, {useEffect, useState} from 'react';
import './App.css';

import {initializeApp} from 'firebase/app';
import { MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
import MainApp from "./pages/MainApp";
import {NotificationsProvider} from "@mantine/notifications";

const firebaseConfig = {
    apiKey: "AIzaSyD3EZk3wDWuj32wSQlNsSI4rbU-dzBUKJw",
    authDomain: "tmup-dcfeb.firebaseapp.com",
    projectId: "tmup-dcfeb",
    storageBucket: "tmup-dcfeb.appspot.com",
    messagingSenderId: "759983315492",
    appId: "1:759983315492:web:a177667f4f68d2829696b1",
    measurementId: "G-DGDQ8NZXL6"
};

initializeApp(firebaseConfig);

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <NotificationsProvider>
                    <div className="App">
                        <header>
                            <MainApp />
                        </header>
                    </div>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
