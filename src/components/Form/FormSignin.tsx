import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Group, MultiSelect,
    PasswordInput,
    TextInput,
    Text

} from "@mantine/core";
import {useForm} from "@mantine/form";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
import notificationSuccess from "../Notification/NotificationSuccess";
//import {t} from "i18next";
import {DatePicker} from "@mantine/dates";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface FormSigninAvParams {
    close() : any,
    type : string
}

function FormSignin(props:FormSigninAvParams) {

    const db = getFirestore();
    //const { colorScheme } = useMantineColorScheme();
    //const dark = colorScheme === 'dark';

    const [data, setData] = useState(['Tennis', 'Foot']);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);


    let form = useForm({
        initialValues: {
            email: '',
            password: '',
            confPassword: '',
            birthday: new Date(),
            hobbies: []
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Error email"),
            password: (value) => (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ? null : "Error password"),
            confPassword: (value, values) => (value === values.password ? null : "Not same password"),
            birthday: (value: Date) => (new Date().getFullYear() - value.getFullYear() >= 18 ? null : "Il faut avoir 18 ans au minimum")

        },
    });

    const sendSingin = async (values: { email: string, password: string, confPassword : string, birthday : Date, hobbies : string[] }) => {

        setLoading(true)
        console.log("Data : ", values)
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                addInformations(userCredential.user.uid, values.email, values.birthday, values.hobbies)

            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
                setError(error.message)
            });
    }

    const addInformations = async (userId : string, email : string, birthday : Date, hobbies : string[]) => {

        const userData = {uid : userId, email: email, birthday: birthday, hobbies: hobbies, type : props.type}
        setDoc(doc(db, 'userData', userId), {
            ...userData
        }).then(() => {
            setLoading(false);
            props.close();
            notificationSuccess("Inscription réussite","Vous êtes bien inscrit :)");
        })
        .catch((error) => {
            console.error(error)
            setLoading(false)
            setError(error.message)
        });

        setDoc(doc(db, 'data', 'hobbies'), {
            data
        }).then(() => {
            console.log("Champs updated")
        })
        .catch((error) => {
            console.error(error)
        });
    }

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const db = getFirestore();const docRef = doc(db, "data", "hobbies");
            const reqHobbies = await getDoc(docRef);
            // @ts-ignore
            setData(reqHobbies.data().data)
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])


    return (
        <React.Fragment>

            <Box mx="auto" style={{textAlign:"left"}}>


                <form onSubmit={form.onSubmit(sendSingin)}>
                    {error ? <Text  color="red">{error}</Text> : <></>}
                    <TextInput
                        required
                        label="Email"
                        placeholder="email.address@gmail.com"
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        required
                        mt="sm"
                        label="Mot de Passe"
                        placeholder="motdepasse123"
                        description="Minimum 1 caratère et 1 chiffre, longueur minimal de 8"
                        {...form.getInputProps('password')}
                    />

                    <PasswordInput
                        required
                        mt="sm"
                        label="Confirmation Mot de Passe"
                        placeholder="motdepasse123"
                        description="Identique au mot de passe"
                        {...form.getInputProps('confPassword')}
                    />

                    <DatePicker
                        label="Birthday"
                        required
                        {...form.getInputProps('birthday')}
                    />

                    <MultiSelect
                        label="Les passions qui pourrait t'interesser ?"
                        data={data}
                        placeholder="Ecrit ce qui t'interesse !"
                        searchable
                        creatable
                        maxDropdownHeight={160}
                        limit={20}
                        getCreateLabel={(query) => `+ Create ${query}`}
                        onCreate={(query) => setData((current) => [...current, query])}
                        {...form.getInputProps('hobbies')}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit" loading={loading}>Valider</Button>
                    </Group>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default FormSignin;