const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("READWRITE FILE", async function () {
  let readWrite_address;
  
  //Declear pre-script in all it-declearation
  beforeEach(async () => {

    ReadWrite = await ethers.getContractFactory("ReadWrite");
    readWrite = await ReadWrite.deploy();
   await readWrite.deployed();
   readWrite_address=readWrite.address

  });

  // get NFT Marketplace  address
    it("Should read data", async function () {

            console.log("read data address id",readWrite_address);
            await readWrite.writeData("Dablu");
            let y =  await readWrite.readData();
              console.log(y)
    });

    // get the list of all 
   
  });
