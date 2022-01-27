const fs = require("fs");
const createContract = async (name) => {
  let data = `
  // SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.10 and less than 0.9.0
pragma solidity ^0.8.10;

contract ${name} {
    string public greet = "Hello World!";
}
  `;
  const dir = "./contracts";
  if (!fs.existsSync(dir)) {
    await fs.mkdirSync(dir, {
      recursive: true,
    });
  }
  await fs.writeFileSync("contracts/Hello.sol", data);
  console.log("File written successfully\n");
  console.log("The written has the following contents:");
};

createContract("Hello");

module.exports = createContract;
