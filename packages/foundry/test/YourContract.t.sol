// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../contracts/YourContract.sol";

contract WorldCapitalTest is Test {
    WorldCapital public worldCapital;

    function setUp() public {
        worldCapital = new WorldCapital(vm.addr(1));
    }

    function testInitialSupply() public view {
        require(worldCapital.totalSupply() == 1000 * 10 ** 18);
    }
}
