let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++){
        for (let c = 0; c < noun.length; c++){
            let result = (pronoun[a] + adj[b] + noun[c] + ".com");
            console.log(result);
        }
    }
    
}