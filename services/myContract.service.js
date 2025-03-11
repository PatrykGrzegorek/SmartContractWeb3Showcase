const { Web3 } = require("web3");

const contractABI =
  require("../artifacts/contracts/MyContract.sol/MyContract.json").abi;
const contractAddress = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";

const web3 = new Web3("http://127.0.0.1:8545");
const myContract = new web3.eth.Contract(contractABI, contractAddress);

const getMyContractData = async () => {
  const data = await myContract.methods.getMyContractSC().call();
  return { name: data[0], balance: data[1].toString() };
};

const updateMyContractBalance = async (newBalance) => {
  const account = await getAccount(0);
  const tx = await myContract.methods
    .updateMyContractBalanceSC(newBalance)
    .send({ from: account });
  return tx;
};

//Should be in diffrent file like account.service.js but just to save time
const getAccountBalance = async () => {
  const account = await getAccount(0);
  const balanceWei = await web3.eth.getBalance(account);
  const balanceEth = web3.utils.fromWei(balanceWei, "ether");
  return balanceEth;
};

const getAccount = async (number) => {
  const accounts = await web3.eth.getAccounts();
  return accounts[number];
};

const getETHPrice = async (gasUsed) => {
  const gasPrice = await web3.eth.getGasPrice();
  const totalCostWei = BigInt(gasUsed) * BigInt(gasPrice);
  const totalCostEth = web3.utils.fromWei(totalCostWei.toString(), "ether");
  return totalCostEth;
};
//

module.exports = {
  getMyContractData,
  updateMyContractBalance,
  getAccountBalance,
  getETHPrice,
};
