type PostCardProps = {
    index?: number,
    author?: {
        $oid: any
    },
    isSolo?: boolean,
    title: string,
    openDrawer?: () => void,
}

export default PostCardProps