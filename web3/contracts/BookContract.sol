// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract BookContract{
    address owner;
    event addCID(address publicKey, string CID);
    constructor(){
      owner = msg.sender;
    }

    modifier ownerOnly(){
      require(msg.sender == owner);
      _;
    }

    mapping(address => string[]) private CIDs;

    function getCID(address publicKey) public ownerOnly view returns (string[] memory){
        return CIDs[publicKey];
    }

    function storeCID (address publicKey, string memory CID) public{
        CIDs[publicKey].push(CID);
        emit addCID(publicKey,CID);
    }

    function deleteCID (address publicKey, string memory CID ) public{
        string[] memory vals = CIDs[publicKey];
        uint len = vals.length;
        string[] memory arr = new string[](vals.length-1);
        uint j=0;
        for (uint256 i = 0; i < len; ++i) {
            if(keccak256(abi.encodePacked(CID)) == keccak256(abi.encodePacked(vals[i]))) continue;
            arr[j] = vals[i];
            j++;
        }  
        CIDs[publicKey] = arr;      
    }

}