import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    card: {
        width:'90%',
        margin: '20px auto'
    },
    cardTitle: {
        fontSize: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        color: '#115293',
        fontWeight: 'bold'
    },
    avatarSmall: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginTop: '10px',
        marginLeft: '10px'
    },
    commentButton: {
        marginLeft: '10px',
        color: '#115293',
    },
}));

export default useStyles