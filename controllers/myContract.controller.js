const {
  getMyContractData,
  updateMyContractBalance,
  getAccountBalance,
  getETHPrice,
} = require("../services/myContract.service.js");

const getMyContract = async (req, res) => {
  try {
    const data = await getMyContractData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMyContract = async (req, res) => {
  try {
    const { balance } = req.body;
    const tx = await updateMyContractBalance(balance);
    const realPriceETH = await getETHPrice(tx.gasUsed);
    const currentAccountBalance = await getAccountBalance();
    message =
      "Balance updated. " +
      "Gas used: " +
      tx.gasUsed.toString() +
      ". Real cost in ETH: " +
      realPriceETH.toString() +
      ". Current account ETH balance: " +
      currentAccountBalance.toString();
    res.status(200).json({ message: message, txHash: tx.hash });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMyContract,
  updateMyContract,
};
