//React
import React from 'react'
import {useParams} from "react-router";
//store
import HomeStore from '../../Store/Home'
//Components
import PostCard from "../../Components/PostCard/PostCard";
//MaterialUI
import Container from '@material-ui/core/Container'

const Comment: React.FC = (): JSX.Element => {

    const {id}: any = useParams()


    return (
        <Container>
            <PostCard author={HomeStore.allPosts[id].author} title={HomeStore.allPosts[id].title} isSolo={true}/>
        </Container>
    )
}

export default Comment