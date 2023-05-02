console.log("SCRIPT START");
document.getElementById("fid").addEventListener("click", () => {
  console.log("EVENT LISTINER IS WORKING..");
});

const spn = document.getElementById("info-span");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;

  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
sleep(5000);

(async () => {
  console.log("t1", new Date());
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    });
  }, 3000);
  console.log("t2", new Date());
})();

spn.innerHTML = "MAIN THREAD IS FREE T2";

console.log("SCRIPT END");
