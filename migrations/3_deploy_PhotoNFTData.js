const PhotoNFTData = artifacts.require("./PhotoNFTData.sol");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(PhotoNFTData);
};
