console.log("MAIN THREAD BLOCKER SCRIPT START");
document.getElementById("fid-search").addEventListener("click", () => {
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
console.log("MAIN THREAD BLOCKER SCRIPT END");
