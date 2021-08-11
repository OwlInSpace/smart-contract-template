import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import deployContract from "../scripts/deployContract"
import { Contract } from "../typechain/Contract"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  <Contract>await deployContract(hre, "Contract")
}

export default func
