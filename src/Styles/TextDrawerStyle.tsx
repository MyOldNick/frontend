import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    drawer: {
        height: '73vh',
        overflow: 'hidden'
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
    secondaryButton: {
        width: '90%',
        margin: '5px auto',
        // marginTop: '10px',

    }
}));

export default useStyles