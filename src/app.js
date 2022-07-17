import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const useStyles = makeStyles({
  foo: {
    backgroundColor: 'red',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.foo}>Learn React</Typography>
      <Button variant="contained" color="primary">
        Learn React
      </Button>
      <AccessAlarmIcon />
    </div>
  );
}

export default App;
