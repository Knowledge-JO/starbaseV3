// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <=0.8.20;

import "./token.sol";

contract Starship {
    event TokenCreated(address indexed tokenAddress, string name, string symbol, uint256 totalSupply);

    function createToken(string memory name, string memory symbol, uint256 totalSupply, uint _holdingCap) external {
        token newToken = new token(name, symbol, totalSupply, _holdingCap);
        emit TokenCreated(address(newToken), name, symbol, totalSupply);
    }

    function teamAllocation(address teamWallet, uint256 amount, address tokenAddress) public {
        require(teamWallet != address(0), "Enter a valid amount");
        require(amount < 0, "Enter a value greater than 0");
        token(tokenAddress).transfer(teamWallet, amount);
    }

    
}