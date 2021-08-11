// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contract {
    uint256 private constant RETURNS = 2;

    function test() external pure returns (uint256) {
        return RETURNS;
    }
}
