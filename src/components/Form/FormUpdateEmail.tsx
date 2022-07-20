import React, {useEffect, useState} from 'react';
import {
    ActionIcon,
    Box,
    Button, Grid,
    Group,
    Text, TextInput

} from "@mantine/core";
import {getFirestore, doc, updateDoc } from "firebase/firestore";
//import {t} from "i18next";
import { getAuth, updateEmail } from "firebase/auth";
import {string} from "zod";
import {useForm} from "@mantine/form";
import {Send} from "tabler-icons-react";

interface FormUpdateEmailParams {
    email : string
}

function FormUpdateEmail(props:FormUpdateEmailParams) {

    const db = getFirestore();
    //const { colorScheme } = useMantineColorScheme();
    //const dark = colorScheme === 'dark';
    const auth = getAuth();

    const user = auth.currentUser;

    const [loading, setLoading] = useState(false);

    let form = useForm({
        initialValues: {
            email: props.email,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Error email")
        },
    });

    const askUpdateUserData = async (values : {email : string}) => {
        if (auth.currentUser) {
            updateDoc(doc(db, "userData", auth.currentUser.uid), {
                ...values
            }).then(() => {
                setLoading(false)
            }).catch((error) => {
                console.error("Error update email change")
            });
        }
    }

    const askUpdate = async (values : {email : string}) => {
        setLoading(true)

        if (auth.currentUser) {
            updateEmail(auth.currentUser, values.email).then(() => {
                askUpdateUserData(values)
            }).catch((error) => {
                console.error("Error email change")
            });
        }
    }


    return (
        <React.Fragment>
            <form onSubmit={form.onSubmit(askUpdate)}>
                <Group mb="xs">
                    <Text weight={500} size="sm" sx={{ flex: 1 }}>
                        Email
                    </Text>
                </Group>
                <Group position="center" mt="md">
                    <TextInput
                        required
                        sx={{ flex: 1 }}
                        placeholder="email.address@gmail.com"
                        {...form.getInputProps('email')}
                    />
                    <ActionIcon loading={loading} type="submit" color="green" variant="filled"><Send size={16} /></ActionIcon>
                </Group>
            </form>
        </React.Fragment>
    );
}

export default FormUpdateEmail;