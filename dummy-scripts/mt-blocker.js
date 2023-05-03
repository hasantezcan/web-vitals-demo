console.log("SCRIPT START");
document.getElementById("fid").addEventListener("click", () => {
  console.log("EVENT LISTINER IS WORKING..");
});
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
sleep(5000);
console.log("SCRIPT END");
