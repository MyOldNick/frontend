import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: '60px',
    },
    avatarBig: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginRight: '25px'
    },
    avatarSmall: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginTop: '10px',
        marginLeft: '10px'
    },
    mainInfo: {
        display: 'flex',
        marginTop: '20px'
    },
    form: {
        width: '90%',
        marginTop: '20px',
        marginBottom: '5px',
        margin: '0px auto',
        height: '60%'
    },
    input: {
        minHeight: '38vh',
        maxHeight: '38vh',
        "&::placeholder": {
            fontFamily: ['Alegreya', 'serif'].join(','),
        }
    },
    label: {
        fontFamily: ['Alegreya', 'serif'].join(','),
    },
    button: {
        width: '100%',
        margin: '20px auto',
        fontFamily: ['Alegreya', 'serif'].join(','),
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
    drawer: {
        height: '73vh',
        overflow: 'hidden'
    },
    secondaryButton: {
        width: '90%',
        margin: '5px auto',
        // marginTop: '10px',

    }
}));

export default useStyles