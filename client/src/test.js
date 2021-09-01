const avengers = ["Captain America", "Iron Man", "Hulk", "Thor"];

const avengersAfterThanos = avengers.filter((a) => a !== "Iron Man");

const avengersNext = avengersAfterThanos.push("Pekkis");

console.log("aat", avengersAfterThanos);
console.log("an", avengersNext);
