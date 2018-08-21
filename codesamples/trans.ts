const timeout = millisecs => new Promise(res => setTimeout(res, millisecs));

(async function () {
    console.log(new Date());
    await timeout(2000);
    console.log(new Date());
})();
