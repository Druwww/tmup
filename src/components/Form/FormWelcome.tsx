import React from 'react';
import {Box, Button, Checkbox, Group, MantineColor, Paper, TextInput, useMantineColorScheme} from "@mantine/core";
import {useForm} from "@mantine/form";
import {getFirestore, doc, setDoc} from "firebase/firestore";
import notificationSuccess from "../Notification/NotificationSuccess";
import notificationFail from "../Notification/NotificationFail";
import {t} from "i18next";

interface FormWelcomeParams {
    form : {
        Title : string,
        Email : string,
        ErrorEmail : string,
        Checkbox : string,
        Validation : string,
    }
    personType : string,
    color? : MantineColor
}



function FormWelcome(props:FormWelcomeParams) {

    const form = useForm({
        initialValues: {
            email: '',
            newsLetter: false,
            personType: props.personType
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : props.form.ErrorEmail),
        },
    });



    const sendForm = async (values: { email: string, newsLetter: boolean }) => {
        const db = getFirestore();

        try {
            await setDoc(doc(db, "poc", values.email.split('@')[0]), {
                values
            }).then((result) => {
                    form.reset();
                    notificationSuccess(
                        t("Welcome.Form.Interest.Notification.Success.title"),
                        t("Welcome.Form.Interest.Notification.Success.message")
                    )
                }
            )
        } catch (e) {
            notificationFail(
                t("Welcome.Form.Interest.Notification.Fail.title"),
                t("Welcome.Form.Interest.Notification.Fail.message")
            )
        }

    }

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <React.Fragment>
            <Paper
                p="md"
                withBorder={true}
                sx={(theme) => ({
                    borderColor:props.color,
                    backgroundColor: dark ? theme.colors.dark[8] : theme.colors.gray[0]
                })}
            >
                <Box sx={{ maxWidth: 300 }} mx="auto" style={{textAlign:"left"}}>
                    <form onSubmit={form.onSubmit(sendForm)}>
                        <TextInput
                            required
                            label={props.form.Title}
                            placeholder={props.form.Email}
                            {...form.getInputProps('email')}
                        />

                        <Checkbox
                            mt="md"
                            label={props.form.Checkbox}
                            {...form.getInputProps('newsLetter', { type: 'checkbox' })}
                        />

                        <Group position="right" mt="md">
                            <Button type="submit">{props.form.Validation}</Button>
                        </Group>
                    </form>
                </Box>
            </Paper>
        </React.Fragment>
    );
}

export default FormWelcome;