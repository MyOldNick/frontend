//React
import React, {BaseSyntheticEvent, useEffect, useState} from 'react'
//Store
import {observer} from 'mobx-react-lite'
import UserStore from '../../Store/User'
//MaterialUI
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//styles
import useStyles from "../../Styles/UserPage";
//images
import Image from '../../Images/img.png'

const User: React.FC = observer((): JSX.Element => {
    const [formData, setFormData] = useState<string>('')
    const styles = useStyles()

    useEffect(() => {

        UserStore.getUserPosts()

    }, [])

    const onChange = (event: BaseSyntheticEvent) => {
        const {value} = event.target

        setFormData(value)
    }

    const createPost = () => {
        if(formData.length > 0) {
            UserStore.createPost(formData)
            setFormData('')
        }
    }


    return (
        <Container className={styles.container}>
            <div className={styles.header}>
                PROJECT NAME
            </div>
            <div className={styles.mainInfo}>
                <Avatar src={Image} className={styles.avatarBig}/>
                <p>
                    <strong>{UserStore.user.username}</strong>
                    <br/>Hello. This is your profile
                </p>
            </div>
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
            <Button onClick={createPost} variant="contained" color="primary" className={styles.button}>
                Отправить
            </Button>

            {UserStore.userPosts?.map((el: any, index: number) => (
                <div key={index} className={styles.card}>
                    <div style={{display: 'flex'}}>
                        <Avatar src={Image} className={styles.avatarSmall}/>
                        <Typography className={styles.cardTitle}> {UserStore.user.username}</Typography>
                    </div>
                    <CardContent>
                        <Typography style={{whiteSpace: 'pre-wrap'}}> {el.title}</Typography>
                    </CardContent>
                </div>
            ))}
        </Container>
    )
})

export default User