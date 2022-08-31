async function delayedResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operacja wykonana pomyślnie.");
        }, 500);
    });
}

(async function execAsyncFunc() {
    const result = await delayedResult();
    console.log(result);
})();