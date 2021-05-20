// const ConvertLib = artifacts.require("ConvertLib");
const StarNotary = artifacts.require("./StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary);
  // deployer.deploy(ConvertLib);
};
