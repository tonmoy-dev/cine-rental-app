const moviesData = [
  {
    id: crypto.randomUUID(),
    cover: "avatar_the_way_of_water.jpg",
    title: "Avatar: The Way of Water",
    description:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    genre: "Action/Adventure/Fantasy",
    rating: 7.8,
    price: 1000,
  },
  {
    id: crypto.randomUUID(),
    cover: "sherlock_holmes.jpg",
    title: "Sherlock Holmes",
    description:
      "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
    genre: "Action/Adventure/Mystery",
    rating: 7.6,
    price: 900,
  },
  {
    id: crypto.randomUUID(),
    cover: "jhon_wick.jpg",
    title: "John Wick",
    description:
      "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.",
    genre: "Action/Thriller",
    rating: 7.4,
    price: 700,
  },
  {
    id: crypto.randomUUID(),
    cover: "avengers_endgame.jpg",
    title: "Avengers: Endgame",
    description:
      "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    genre: "Action/Sci-fi",
    rating: 8.4,
    price: 2500,
  },
  {
    id: crypto.randomUUID(),
    cover: "oppenheimer.jpg",
    title: "Oppenheimer",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
    genre: "Thriller/Mystery",
    rating: 8.4,
    price: 1000,
  },
  {
    id: crypto.randomUUID(),
    cover: "the_last_kingdom.jpg",
    title: "The Last Kingdom: Seven Kings Must Die",
    description:
      "Following the death of King Edward, invaders and rival heirs do battle for the crown. Uthred and his comrades strive to form a united England.",
    genre: "Action/War",
    rating: 6.9,
    price: 500,
  },
];

function getAllMovies() {
  return moviesData;
}

export { getAllMovies };

// TODO:Create favorite, watch later, new releases Dummy data using functions as like getAllMoves()

// {
//     "id": crypto.randomUUID();
//     "cover":"",
//     "title":"",
//     "description":"",
//     "genre":"",
//     "rating":"",
//     "price":"",
// }
