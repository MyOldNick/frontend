//React
import React, {BaseSyntheticEvent, useState} from 'react'
//Store
import {observer} from "mobx-react-lite";
import Language from "../../Store/Language";
import UserStore from '../../Store/User'
//Components
import LanguageButton from "../../Components/Buttons/LanguageButton";
//MaterialUI
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//styles
import useStyles from "../../Styles/LoginAndRegisterStyles";
//constant
import {
    PASSWORD_ENG,
    SIGN_IN_ENG,
    REGISTRATION_ENG,
    EMAIL_ENG
} from '../../Constants/English/RegistartionAndLoginEng'

import {
    PASSWORD_RUS,
    SIGN_IN_RUS,
    REGISTRATION_RUS,
    EMAIL_RUS
} from '../../Constants/Russian/RegistartionAndLoginRus'

const Login: React.FC<any> = observer(({history}): JSX.Element => {
    const [formData, setFormData] = useState<any>({})

    const styles = useStyles()


    const goToRegister = () => history.push('/register')

    const onChange = (event: BaseSyntheticEvent) => {

        console.log(event.target.name)

        const {name, value}: any = event.target

        const obj = Object.assign(formData, {[name]: value})

        setFormData(obj)
    }

    const auth = () => {

        UserStore.authUser(formData).then(res => {
            if (res.status === 200) {
                history.push('/')
            }
        })

        // UserStore.fakeUser()
        //
        // history.push('/')

    }

    return (
        <Container className={styles.container}>
            <LanguageButton/>
            <h1 className={styles.title}>{Language.english ? SIGN_IN_ENG : SIGN_IN_RUS}</h1>
            <TextField
                name='username'
                onChange={onChange}
                label={Language.english ? EMAIL_ENG : EMAIL_RUS}
                placeholder={Language.english ? EMAIL_ENG : EMAIL_RUS}
                variant="outlined"
                className={styles.form}
                InputProps={{
                    classes: {input: styles.input}
                }}
                InputLabelProps={{
                    className: styles.label
                }}
            />
            <TextField
                name='password'
                onChange={onChange}
                label={Language.english ? PASSWORD_ENG : PASSWORD_RUS}
                placeholder={Language.english ? PASSWORD_ENG : PASSWORD_RUS}
                type="password"
                variant="outlined"
                className={styles.form}
                InputProps={{
                    classes: {input: styles.input}
                }}
                InputLabelProps={{
                    className: styles.label
                }}
            />

            <Button onClick={auth} variant="contained" color="primary" className={styles.button}>
                {Language.english ? SIGN_IN_ENG : SIGN_IN_RUS}
            </Button>

            <Button onClick={goToRegister}
                    className={styles.link}>{Language.english ? REGISTRATION_ENG : REGISTRATION_RUS}</Button>
        </Container>
    )
})

export default Login