import React, { Component } from 'react';
import './App.css';
import Ownable from '../src/Contracts/Ownable.json'
import MyEtherClub from '../src/Contracts/MyEtherClub.json'
import Web3 from 'web3';

class Smart extends Component {
  async componentWillMount(){
    await this.loadData()
  }
async loadData(){
  const web3=new Web3(Web3.givenProvider|| 'http://localhost8545');
  const networkId1=await web3.eth.net.getId();
  // console.log(networkId1);
  const networkData1=Ownable.networks[networkId1].address;
  const networkData2=MyEtherClub.networks[networkId1].address;
  // console.log(networkData2)
  const accounts=await web3.eth.getAccounts();
//  console.log(accounts[0]);
  this.setState({
    account:accounts[0]
  })
  const ownable=new web3.eth.Contract(Ownable.abi,networkData1);
  this.setState({ownable})
  const myethclub1=new web3.eth.Contract(MyEtherClub.abi,networkData2)
  this.setState({myethclub:myethclub1})
  // console.log(this.state.ownable)
  //variables
  const owner= await ownable.methods.owner().call();
  this.setState({owner1:owner})
  // console.log(this.state.ownable)
  // console.log(this.state.name)
  const manager=await ownable.methods.manager().call();
  this.setState({manager:manager});
  // console.log(id)
  // this.setState({Id:id})
  const id=await this.state.myethclub.methods.currUserID().call()
  this.setState({Id:id})
  // console.log(this.state.Id);
  const userReferal=await this.state.myethclub.methods.viewUserReferral(this.state.account).call();
  this.setState({refId:userReferal})
  // console.log(this.state.refId[0])
  const c=this.props.some;
  const v=await this.state.myethclub.methods.users(c).call();
  console.log(v.isExist);
  // this.setState({users:v})
}
// Functions
  changeOwnership=(event)=>{
    this.state.ownable.methods.transferOwnership(this.state.address1).send({from:this.state.account,
  gas:5000000});
    event.preventDefault();

  }
  changeManager=(event)=>{
this.state.ownable.methods.getMap(this.state.address2)
.send({from:this.state.account,
gas:500000});
event.preventDefault();
// // var Transfer=this.state.ajwa.Transfer();
//     // Transfer.watch(function(error,result){
//   //  if(!error){
//     // console.log(result)
//   //  }
//   //  else{
//     //  console.log(error)
//   //  }
//     // })
  }
  levelUp=(event)=>{
    this.state.myethclub.methods.buyLevel(this.state.amount1)
    .send({from:this.state.account,
      // value:0.5,
    gas:500000});
    event.preventDefault();
  }
//   registerUser=(event)=>{
//     this.state.myethclub.methods.regUser().send({from:this
//     .state.account,
//     value:0.5,
//   gas:500000});
//   event.preventDefault();
//   }
//   login=(event)=>{
   
//   event.preventDefault();
// }
constructor(props){
  super(props)
  this.state={
    account:'',
    manager:'',
    owner1:'',
    ownable:'',
    myethclub:'',
    Id:'',
    refId:'',
    amount1:'',
    amount2:'',
    address1:'',
    address2:'',
    users:[
      {
        isExist:"",
        id:'',
        reffererID:'',
        refferal:[],
        levelExpired:''
      }
    ],
    signInId:''
    // address:''
  } 
}
handleValueChange1=(event)=>{
  this.setState({address1:event.target.value})
}
handleValueChange2=(event)=>{
  this.setState({address2:event.target.value})
}
handleValueChange3=(event)=>{
  this.setState({amount1:event.target.value})
}
handleValueChange4=(event)=>{
  this.setState({amount2:event.target.value})
  }
  
  render(){
  return (
       <div>
         <div>
         {this.props.some}
         
         </div>
      <form onSubmit={this.changeOwnership} >
  <h4 id='heading'></h4>
        <div className='input-group'>
        <input className='form-control form-control-lg'  id='input' 
        placeholder='Enter address of new Owner' value={this.state.address1} 
        onChange={this.handleValueChange1}></input>
       </div >
  <div className='btn-group-input'> 
  <br/>
     <button type='submit' className="btn btn-info btn-lg" id='button'>
    changeOwnership
  </button >
  </div>
  </form>
<br></br>
<form onSubmit={this.changeManager} >
        <h4 id='heading'>Click to set the new Manager</h4>
        <div className='input-group'>
        <input className='form-control form-control-lg'  id='input' 
        placeholder='Enter address of new Owner' value={this.state.address2} 
        onChange={this.handleValueChange2}></input>
       </div >
  <div className='btn-group-input'> 
  <br/>
     <button type='submit' className="btn btn-info btn-lg" id='button'>
    changeOwnership
  </button >
  </div>
  </form>

   <form onSubmit={this.levelUp}>
  <h4 id='heading'>Click to buy Level</h4>
  {/* <div className='input-group'>
        <input type='number' className='form-control form-control-lg' 
        min='0' id='input' value={this.state.amount1}
        placeholder='Enter TO_Address'
        onChange={this.handleValueChange3}></input>
       </div > */}
       <br></br>
       <div className='input-group'>
        <input type='number' className='form-control form-control-lg' 
        min='0' id='input' value={this.state.amount2}
        placeholder='Level number'
        onChange={this.handleValueChange4}></input>
       </div >
       <br></br>
  <div className='btn-group-input'> 
     <button type='submit' className="btn btn-info btn-lg" id='button'>
    Buy Level
  </button >
  </div>
  </form>
  {/*
  <br></br>
  <form onSubmit={this.Approve}>
  <h4 id='heading'>APPROVE</h4>
  <div className='input-group'>
        <input className='form-control form-control-lg' 
        min='0' id='input'
        value={this.state.spender}
        placeholder='Enter Spender Address'
        onChange={this.handleApproveAddress}></input>
       </div >
       <br></br>
       <div className='input-group'>
        <input type='number' className='form-control form-control-lg' 
        min='0' id='input' pattern='[0-9]'
        placeholder='Enter Amount of Tokens' value={this.state.value4} 
        onChange={this.handleValueChange4}></input>
       </div >
  <div className='btn-group-input'> 
  <br/>
     <button type='submit' className="btn btn-info btn-lg" id='button'>
    APPROVE
  </button >
  </div>
  </form>
<br></br>
<form onSubmit={this.checkBalance}>
  <h4 id='heading'>CHECK BALANCE</h4>
  <div className='input-group'>
        <input className='form-control form-control-lg' 
        min='0' id='input'
        value={this.state.balanceAddress}
        placeholder='Enter Tokens Holder Address'
        onChange={this.handleBalanceAddress}></input>
       </div >
  <div className='btn-group-input'> 
  <br/>
     <button type='submit' className="btn btn-info btn-lg" id='button'>
    Balance_OF
  </button>
  </div>
</form> */} 




{/* <div className='container text-center'>
  <h1 id='Document'>Documentaion</h1>
  <div id='Doc-p'>
    <p>You can Download the paper for the business plan of this project</p>
  </div>
  <span>
    <button className='btn btn-info btn-lg'>DOWNLOAD PAPER</button>
  </span>
  
</div>
<br/>
<div className='container text-center' id='sub'>
  <div className='row justify-content-md-center'>
  <div className='col-md-10 col-lg-4' id='sub2'>
    <h3 className='text-warning'>To Put Your Investment</h3>
    <div> <button className='btn btn-warning btn-lg'>Join Project</button></div>
</div>
  <div className='col-md-10 col-lg-4' id='sub1'>
    <h3 className='text-warning'>To receive Updates Subscribe </h3>
    <form>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1" className='text-dark' id='head1'>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"
    placeholder='Enter your Emal' aria-describedby="emailHelp"></input>
    <br></br>
    <button className='btn btn-warning btn-lg'>SUBSCRIBE NOW</button>
    <div id="emailHelp" className="lead text-dark">We'll never share your email with anyone else.</div>
  </div>
    </form>
  </div>
  </div>
  
</div>
<br></br>
<footer >
  <div className='container' >
    <div className='row'>
      <h4>© 2020 Ajwa Token - All Rights Reserved</h4>
   <div><p>SAUDI Agriculture Development Co., Ltd is not the organizer of TGE, does not conduct
      TGE, does not participate in the profits or losses of TGE and is not liable to buyers of
       AJWATOKENS project tokens. TGE organizers used information about the functioning of the 
       company SAUDI Agriculture Development Co., Ltd solely for informational purposes.</p></div>
    </div>
  </div>
</footer> */}

    </div>
  
  );
}
}

export default Smart;
