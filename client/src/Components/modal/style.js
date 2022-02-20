import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  input: {
    width: 500,
    marginBottom: 30,
  },
  button: {
    width: 500,
    marginBottom: 60,
    height: 45,
    fontWeight: 'bold',
    marginTop: 10,
  },
  alert: {
    width: 500,
    height: 50,
  },
  spin: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
});
export default useStyles;
