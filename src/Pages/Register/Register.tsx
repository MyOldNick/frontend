//React
import React, {BaseSyntheticEvent, useState} from 'react'
import {useHistory} from "react-router";
//store
import {observer} from "mobx-react-lite";
import Language from "../../Store/Language";
//MaterialUI
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//styles
import useStyles from "../../Styles/LoginAndRegisterStyles";
//Constants
import {
    LOGIN_ENG,
    PASSWORD_ENG,
    CONFIRM_PASSWORD_ENG,
    ENTER_PASSWORD_ENG,
    SIGN_IN_ENG,
    REGISTRATION_ENG,
    EMAIL_ENG
} from '../../Constants/English/RegistartionAndLoginEng'

import {
    LOGIN_RUS,
    PASSWORD_RUS,
    CONFIRM_PASSWORD_RUS,
    ENTER_PASSWORD_RUS,
    SIGN_IN_RUS,
    REGISTRATION_RUS,
    EMAIL_RUS
} from '../../Constants/Russian/RegistartionAndLoginRus'
import {API} from '../../Constants/API'
//components
import LanguageButton from "../../Components/Buttons/LanguageButton";

const Register: React.FC<any> = observer((): JSX.Element => {
    const [formsData, setFormsData] = useState<any>({})
    const history = useHistory()
    const styles = useStyles()

    const onChange = (event: BaseSyntheticEvent) => {
        const {name, value} = event.target

        const obj = Object.assign(formsData, {[name]: value})

        setFormsData(obj)
    }

    const goToLogin = () => history.push('/login')

    const createUser = () => {

        const body: any = JSON.stringify(formsData)

        fetch(`${API}users/`, {
            method: "POST",
            body: body,
        }).then(res => {
            if(res.status === 200) {
                alert('User created')
                history.push('/login')
            } else {
                alert('ERROR')
            }
        })
    }


    return (
        <Container className={styles.container} maxWidth="sm">
            <LanguageButton/>
            <h1 className={styles.title} >{Language.english ? REGISTRATION_ENG : REGISTRATION_RUS}</h1>
            <TextField
                name="username"
                onChange={onChange}
                label={Language.english ? LOGIN_ENG : LOGIN_RUS}
                placeholder={Language.english ? LOGIN_ENG : LOGIN_RUS}
                variant="outlined"
                className={styles.form}
                InputProps={{
                    classes: { input: styles.input}
                }}
                InputLabelProps={{
                    className: styles.label
                }}
            />
            <TextField
                label={Language.english ? EMAIL_ENG : EMAIL_RUS}
                placeholder={Language.english ? EMAIL_ENG : EMAIL_RUS}
                variant="outlined"
                className={styles.form}
                InputProps={{
                    classes: { input: styles.input}
                }}
                InputLabelProps={{
                    className: styles.label
                }}
            />
            <TextField
                name="password"
                onChange={onChange}
                label={Language.english ? PASSWORD_ENG : PASSWORD_RUS}
                placeholder={Language.english ? ENTER_PASSWORD_ENG : ENTER_PASSWORD_RUS}
                type="password"
                variant="outlined"
                className={styles.form}
                InputProps={{
                    classes: { input: styles.input}
                }}
                InputLabelProps={{
                    className: styles.label
                }}
            />
            <TextField
                label={Language.english ? CONFIRM_PASSWORD_ENG : CONFIRM_PASSWORD_RUS}
                placeholder={Language.english ? CONFIRM_PASSWORD_ENG : CONFIRM_PASSWORD_RUS}
                type="password"
                variant="outlined"
                className={styles.form}
                InputProps={{
                    classes: { input: styles.input}
                }}
                InputLabelProps={{
                    className: styles.label
                }}
            />

            <Button onClick={createUser} variant="contained" color="primary" className={styles.button}>
                {Language.english ? REGISTRATION_ENG : REGISTRATION_RUS}
            </Button>

            <Button onClick={goToLogin} className={styles.link}>{Language.english ? SIGN_IN_ENG : SIGN_IN_RUS}</Button>
        </Container>
    )
})

export default Register