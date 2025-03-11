// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MyContract {
    string private name;
    uint256 private balance;

    constructor(string memory _name, uint256 _balance) {
        name = _name;
        balance = _balance;
    }

    function getMyContractSC() public view returns (string memory, uint256) {
        return (name, balance);
    }

    function updateMyContractBalanceSC(uint256 _newBalance) public {
        balance = _newBalance;
    }
}