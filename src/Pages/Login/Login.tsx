//React
import React from 'react'
import {
    Link
} from "react-router-dom";
//Store
import {observer} from "mobx-react-lite";
import Language from "../../Store/Language";
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

const Login: React.FC = observer((): JSX.Element => {

    const styles = useStyles()


    return (
        <Container className={styles.container}>
            <LanguageButton/>
            <h1 className={styles.title}>{Language.english ? SIGN_IN_ENG : SIGN_IN_RUS}</h1>
            <TextField
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

            <Button variant="contained" color="primary" className={styles.button}>
                {Language.english ? SIGN_IN_ENG : SIGN_IN_RUS}
            </Button>

            <Link to={'/register'} className={styles.link}>{Language.english ? REGISTRATION_ENG : REGISTRATION_RUS}</Link>
        </Container>
    )
})

export default Login