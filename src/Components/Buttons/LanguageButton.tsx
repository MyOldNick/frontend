//React
import React from 'react'
//Store
import {observer} from "mobx-react-lite";
import Language from "../../Store/Language";
//MaterialUI
import Button from '@material-ui/core/Button';
//styles
import useStyles from '../../Styles/LanuageButtonStyles'

const LanguageButton: React.FC = observer((): JSX.Element => {
    const styles = useStyles()

    return (
        <div className={styles.buttonContainer}>
            <Button onClick={() => Language.changeLanguage()} className={styles.button} variant="outlined" color="primary">
                {Language.english ? "EN" : "RUS"}
            </Button></div>
    )
})

export default LanguageButton