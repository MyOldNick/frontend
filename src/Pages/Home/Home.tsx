//React
import React, {useEffect} from 'react'
//Store
import {observer} from "mobx-react-lite";
import HomeStore from '../../Store/Home'
//MaterialUI
import Container from "@material-ui/core/Container";
//styles
import useStyles from "../../Styles/HomeStyles";
//components
import PostCard from '../../Components/PostCard/PostCard'

const Home: React.FC = observer((): JSX.Element => {
    const styles = useStyles()


    useEffect(() => {

        HomeStore.getAllPosts(1)

    }, [])


    return (
        <Container className={styles.container}>
            {/*add destructuring after types*/}
                {HomeStore.allPosts.map((el, index) => (
                    <PostCard key={index} author={el.author} title={el.title} index={index}/>
                ))}
        </Container>
    )
})

export default Home