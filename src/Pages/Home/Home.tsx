//React
import React, {useEffect} from 'react'
//Store
import {observer} from "mobx-react-lite";
import UserStore from '../../Store/User'
import PostsStore from '../../Store/Posts'
//MaterialUI
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
//images
import Image from '../../Images/img.png'
//styles
import useStyles from "../../Styles/MenuStyles";

const Home: React.FC = observer((): JSX.Element => {

    useEffect(() => {
        PostsStore.getAllPosts()
        console.log(PostsStore.allPosts)
    },[])

    const styles = useStyles()

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome {UserStore.user.username.toUpperCase()} :3 </h1>
            {PostsStore.allPosts.map((el, index) => (
                <div key={index} className={styles.card}>
                    <div style={{display: 'flex'}}>
                        <Avatar src={Image} className={styles.avatarSmall}/>
                        <Typography className={styles.cardTitle}> {el.author?.$oid || 'Анонимный ононим'}</Typography>
                    </div>
                    <CardContent>
                        <Typography style={{whiteSpace: 'pre-wrap'}}> {el.title}</Typography>
                    </CardContent>
                </div>
            ))}
        </div>
    )
})

export default Home