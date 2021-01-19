//react
import React from 'react'
import {useHistory} from "react-router";
//images
import Image from '../../Images/img.png'
//MaterialUI
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
//types
import PostCardProps from "../../Types/PostCardProps";
//styles
import useStyles from '../../Styles/PostCardStyle'

const PostCard: React.FC<PostCardProps> = ({ author, title, index, isSolo}): JSX.Element => {
    const history = useHistory()
    const styles = useStyles()

    const getComments = () => {
        history.push(`/post/${index}`)
    }


    return (
        <div className={styles.card}>
            <div style={{display: 'flex'}}>
                <Avatar src={Image} className={styles.avatarSmall}/>
                <Typography
                    className={styles.cardTitle}> {author?.$oid?.substr(0, 16) || 'Анонимный ононим'}</Typography>
            </div>
            <CardContent>
                <Typography style={{whiteSpace: 'pre-wrap'}}> {title}</Typography>
            </CardContent>
            {isSolo ? <div className={styles.commentButton}>Добавить комментарий</div> : <div onClick={getComments} className={styles.commentButton}>Комментарии</div>}
        </div>
    )
}

export default PostCard