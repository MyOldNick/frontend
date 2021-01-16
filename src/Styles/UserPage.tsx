import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: '60px',
    },
    avatarBig: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    avatarSmall: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginTop: '10px',
        marginLeft: '10px'
    },
    mainInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    header: {
        boxSizing: 'border-box',
        width: '100%',
        height: '40px',
        paddingTop: '15px',
        textAlign: 'center',
        color: '#115293',
    },
    form: {
        width: '100%',
        marginTop: '50px',
        marginLeft: '0px',
        marginRight: '0px',
    },
    input: {
        maxHeight: '80px',
        "&::placeholder": {
            fontFamily: ['Alegreya', 'serif'].join(','),
        }
    },
    label: {
        fontFamily: ['Alegreya', 'serif'].join(','),
    },
    button: {
        width: '30%',
        marginTop: '10px',
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
    }
}));

export default useStyles