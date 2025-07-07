var i=1;
while (i <= 100) {
    if (i % 2 === 0) {
        console.log("Even number: " + i);
    }
    if (i % 3 === 0) {
        console.log("Multiple of 3: " + i);
    }
    if (i % 5 === 0) {
        console.log("Multiple of 5: " + i);

    }
    if (i % 15 === 0) {
        console.log("Multiple of 15: " + i);
    }
    if (i % 7 === 0) {
        console.log("Multiple of 7: " + i);
    }
    if (i % 11 === 0) {
        console.log("Multiple of 11: " + i);
    }
    console.log("Iteration number: " + i);
    i++;
}  