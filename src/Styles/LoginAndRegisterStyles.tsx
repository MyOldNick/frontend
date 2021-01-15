import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        marginTop: '80px',
        textAlign: 'center',
        color: '#115293'
    },
    form: {
        width: '80%',
        margin: '10px auto',
    },
    input: {
        "&::placeholder": {
            fontFamily: ['Alegreya', 'serif'].join(','),
        }
    },
    label: {
        fontFamily: ['Alegreya', 'serif'].join(','),
    },
    button: {
        width: '60%',
        height: '40px',
        margin: '10px auto',
        fontFamily: ['Alegreya', 'serif'].join(','),
    },
    link: {
        fontSize: '18px',
        textAlign: 'center',
        textDecoration: 'none',
        "&:visited": {
            color: '#115293'
        }
    }
});

export default useStyles