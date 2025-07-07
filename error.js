try {
    let result = 10 / 2;
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error);
} finally {
    console.log("This will always run.");
}
