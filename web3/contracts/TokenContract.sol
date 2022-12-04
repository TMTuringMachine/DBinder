//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract TokenContract {
    address payable owner; 
    constructor(){
        owner = payable(msg.sender);
    }
    // address payable user;
    mapping (address => uint) balances;

    modifier enoughMoney() {
        require(msg.value >= uint(balances[msg.sender]), "Not enough Ether Owner Wallet");
        _;
    }

    function sendPaymentToAuthor(address payable author) public payable enoughMoney(){
        require(msg.sender != address(0x0), "error occured");
        author.transfer(msg.value);
        //send money to author
    }
     uint amount;
    //insert our address

    function buyTokens() public payable enoughMoney(){
        require(msg.sender != address(0x0), "error occured");
        owner.transfer(msg.value); //owner is us
        amount = msg.value;
    }

    //call this function is js to get amount for calculating coins
    function getAmount() public view returns (uint) {
        return amount;
    }


}