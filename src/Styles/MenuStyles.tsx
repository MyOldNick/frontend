import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        left: '0',
        bottom: '0',
    },
    card: {
        marginTop: '10px'
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
}));

export default useStyles