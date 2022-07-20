import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


import { Button } from '@mantine/core';
import {useAuthState} from "react-firebase-hooks/auth";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

function Login() {

    const auth = getAuth();
    const { t } = useTranslation();
    const [user, setUser] = useState(useAuthState(auth));

    const signInWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        auth.languageCode = 'en';
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                // @ts-ignore
                setUser(result.user);
                // ...
            }).catch((error) => {
            // Handle Errors here.
            //const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            //const email = error.email;
            // The AuthCredential type that was used.
            //const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.error(errorMessage)
        });
    }
    // @ts-ignore
    return (
        <React.Fragment>
            {// @ts-ignore
                user.displayName ?
                <Button color="red" onClick={() => auth.signOut().then(() => setUser(    // @ts-ignore
                     [null, true, null]))}>{t("Logout")}</Button>
                :
                <Button onClick={signInWithGoogle}>{t('Login')}</Button>}
        </React.Fragment>
    );
}

export default  Login;