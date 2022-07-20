import React, {useState} from 'react';
import {
    ActionIcon,
    Group,
    Text,
} from "@mantine/core";
import {getFirestore, doc, updateDoc } from "firebase/firestore";
//import {t} from "i18next";
import { getAuth} from "firebase/auth";
import {useForm} from "@mantine/form";
import {Send} from "tabler-icons-react";
import {DatePicker} from "@mantine/dates";

interface FormUpdateBirthdayParams {
    birthday : any
}

function FormUpdateBirthday(props:FormUpdateBirthdayParams) {

    const db = getFirestore();
    //const { colorScheme } = useMantineColorScheme();
    //const dark = colorScheme === 'dark';
    const auth = getAuth();

    const [loading, setLoading] = useState(false);

    let form = useForm({
        initialValues: {
            birthday: props.birthday.toDate(),
        },
        validate: {
            birthday: (value: Date) => (new Date().getFullYear() - value.getFullYear() >= 18 ? null : "Il faut avoir 18 ans au minimum")
        },
    });

    const askUpdate = async (values : {birthday : Date}) => {

        setLoading(true)

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

    return (
        <React.Fragment>
            <form onSubmit={form.onSubmit(askUpdate)}>
                <Group mt="xs" mb="xs">
                    <Text weight={500} size="sm" sx={{ flex: 1 }}>
                        Birthday
                    </Text>
                </Group>
                <Group mb="xs">
                    <DatePicker
                        sx={{ flex: 1 }}
                        required
                        {...form.getInputProps('birthday')}
                    />
                    <ActionIcon loading={loading} type="submit" color="green" variant="filled"><Send size={16} /></ActionIcon>
                </Group>
            </form>
        </React.Fragment>
    );
}

export default FormUpdateBirthday;