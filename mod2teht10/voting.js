let numCandidates = parseInt(prompt("How many candidates will there be?"), 10);
let candidates = [];

for (let i = 1; i <= numCandidates; i++) {
    let candName = prompt(`Name for candidate ${i}:`);
    candidates.push({
        name: candName,
        votes: 0
    });
}

let numVoters = parseInt(prompt("How many voters are there?"), 10);

for (let i = 1; i <= numVoters; i++) {
    let vote = prompt(`Voter ${i}, who will you vote for? (Enter name)`);

    if (vote !== "" && vote !== null) {
        let matchedCandidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());

        if (matchedCandidate) {
            matchedCandidate.votes++;
        }
    }
}

candidates.sort((a, b) => {
    return b.votes - a.votes;
});

let winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}