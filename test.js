const Goat = new Promise((resolve, reject) => {
    let ChristianoIstheGoat = true;
    console.log("Who is the football GOAT? ");
    setTimeout(() => {
        if (ChristianoIstheGoat){
            resolve("You're damn right!!");
        }
        else{
            reject("Go to hell!!");
        }
    }, 2000)
});

Goat
.then((data) =>{
    console.log("Result: " + data);
})
.catch((error) => {
    console.log("Error: " + error);
});