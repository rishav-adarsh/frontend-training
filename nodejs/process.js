// process is a global api
process.on("uncaughtException", (err, origin) => {
  console.log(err, origin);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

function test() {
  // try {
  console.log("test function");
  throw "custom error";
  // } catch {}
}
// test();

function asyncWithPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([{ id: 1 }, { id: 2 }, { id: 3 }]);
    }, 1000);
    setTimeout(function () {
      reject();
    }, 2000);
  });
}

asyncWithPromise().then((data) => {
  for (let i = 0; i <= data.length; i++) {
    console.log(data[i].id);
  }
});
