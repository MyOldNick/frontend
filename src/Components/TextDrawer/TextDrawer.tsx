//React
import React from 'react'
//MaterialUI
import Drawer from "@material-ui/core/Drawer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//Types
import TextDrawerProps from "../../Types/TextDrawerProps";
//styles
import useStyles from '../../Styles/TextDrawerStyle'

const TextDrawer: React.FC<TextDrawerProps> = ({openDrawer, closeDrawer, onChange, formData, action}): JSX.Element => {
    const styles = useStyles()

    return (
        <Drawer anchor={'bottom'} open={openDrawer} onClose={closeDrawer} classes={{paper: styles.drawer}}>
            <TextField
                onChange={onChange}
                value={formData}
                name='username'
                label="Ваш пост"
                multiline
                placeholder="Начать писать"
                variant="outlined"
                className={styles.form}
                InputProps={{
                    classes: {input: styles.input}
                }}
                InputLabelProps={{
                    className: styles.label
                }}
            />
            <Button onClick={action} variant="contained" color="primary" className={styles.secondaryButton}>
                Опубликовать пост
            </Button>
            <Button onClick={closeDrawer} variant="contained" color="default" className={styles.secondaryButton}>
                Прикрепить файл
            </Button>
            <Button onClick={closeDrawer} variant="contained" color="secondary" className={styles.secondaryButton}>
                Отмена
            </Button>
        </Drawer>
    )
}

export default TextDrawer