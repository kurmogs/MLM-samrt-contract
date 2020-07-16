import React,{useState, Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Smart from './Contract'
// import Dashboard from './Dashboard'
import Web3 from 'web3';
import MyEtherClub from '../src/Contracts/MyEtherClub.json'
// import Smart from './Contract'
// import { render } from 'react-dom';
var add;
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  async function start(e){
  const web3=new Web3(Web3.givenProvider|| 'http://localhost8545');
  const networkId1=await web3.eth.net.getId();
  // console.log(networkId1)
  const networkData2=MyEtherClub.networks[networkId1].address;
  const accounts=await web3.eth.getAccounts();
  const myethclub1=new web3.eth.Contract(MyEtherClub.abi,networkData2)
  // console.log(myethclub1)
  const id=await myethclub1.methods.currUserID().call()
  console.log(id)
  const v=await myethclub1.methods.users("0x44DA3290Bf08C37b347F92dE6cfe8362062fFCf0").call();
  // console.log(v)
  // console.log("gshha")
  }

  const classes = useStyles();
  const [add,setAdd]=useState("");
//   var add;
  var s=true;
  var add1
  function addf(e){
    setAdd(e.target.value);
    // console.log([add])
    add1=e.target.value;
    e.preventDefault();
  }
  function show(e){
    s=true;
    // console.log(s)
    e.preventDefault();
  }

  return (
    <div onLoad={start()}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <p>Enter your Eth-Address</p>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label='Login Manually'
            autoFocus
            onChange={addf}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={show}
        >

            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up" }
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <h1></h1>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  {/* {   console.log(add)} */}
   {/* { s? <Dashboard some1={add}></Dashboard>:null} */}
    </div>
  );
}