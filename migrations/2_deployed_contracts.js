const Ownable=artifacts.require('./Ownable.sol');
 const MyEtherClub=artifacts.require('./MyEtherClub');
    


module.exports=function(deployer){
    deployer.deploy(Ownable);
    deployer.deploy(MyEtherClub);
};