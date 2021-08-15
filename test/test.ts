import { ethers } from "hardhat"
import { Contract } from "../typechain/Contract"
import { expect } from "chai"

let contract: Contract
describe("Deployment", function () {
  it("Deploy contract", async function () {
    const _Contract = await ethers.getContractFactory("Contract")
    contract = <Contract>await _Contract.deploy()
    await contract.deployed()
  })
})

describe("Testing", function () {
  it("Returns correctly", async function () {
    expect(await contract.test()).to.equal(2)
  })
})
