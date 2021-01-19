type PostCardProps = {
    index?: number,
    author?: {
        $oid: any
    }
    isSolo?: boolean,
    title: string,
}

export default PostCardProps