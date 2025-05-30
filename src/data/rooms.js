const rooms = [
  {
    id: 1,
    title: "The Locked Room",
    image: require("../assets/door.jpg"),
    riddle: "I live in darkness, but I’m not evil. I follow you, but never lead. What am I?",
    answer: "shadow",
    timeLimit: 30,
    clue: "It's always behind you...",
    item: null // No item here
  },
  {
    id: 2,
    title: "The Study",
    image: require("../assets/study.jpg"),
    riddle: "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind.",
    answer: "echo",
    timeLimit: 40,
    clue: "The walls remember your words.",
    item: "Rusty Key" // Collectible item
  },
  {
    id: 3,
    title: "The Attic",
    image: require("../assets/attic.jpg"),
    riddle: "What has keys but can’t open locks?",
    answer: "piano",
    timeLimit: 45,
    clue: "It’s in the corner... covered in dust.",
    itemRequired: "Rusty Key", // You must have this to complete it
    item: null
  },
  {
  id: 4,
  title: "The Painting Hall",
  image: require("../assets/haunted-painting.jpg"), // Add this image!
  riddle:
    "Four portraits stare at you. One whispers the truth. One always lies. One echoes the last. One mimics your thoughts.\n\nThe third says: 'The first lies.'\nThe first says: 'The second speaks the truth.'\nThe fourth says: 'The second and third are both wrong.'\n\nWho tells the truth? (Type 1, 2, 3, or 4)",
  answer: "4",
  timeLimit: 50,
  clue: "Only one tells the truth. Start from the third.",
  item: "Silver Mirror" // optional collectible
},
    {
        id: 5,
        title: "The Final Door",
        image: require("../assets/final-door.jpg"),
        riddle: "To escape, you must answer this: What has a heart that doesn’t beat?",
        answer: "artichoke",
        timeLimit: 60,
        clue: "It’s not what you think...",
        itemRequired: "Silver Mirror", // You must have this to complete it
        item: null
    }

];

export default rooms;
