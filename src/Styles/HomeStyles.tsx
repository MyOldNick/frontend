import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        left: '0',
        bottom: '0',
    },
    container: {
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '50px'
    }
}));

export default useStyles