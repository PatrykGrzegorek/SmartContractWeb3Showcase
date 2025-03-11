async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  console.log("Deploying MyContract...");
  const contract = await MyContract.deploy("Test", 100);
  await contract.waitForDeployment();
  console.log("MyContract deployed to:", await contract.getAddress());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
