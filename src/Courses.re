type breath = {
  duration: int,
  title: string,
  instructions: string,
};

type exercise = {
  id: string,
  title: string,
  description: string,
  breaths: array(breath),
  repeat: int,
};

let deepCalm = {
  id: "deep-calm",
  title: "Deep calm",
  description: "This breathing exercise is a natural tranquilizer for the nervous system. Inhaling, holding and then followed by a long exhale - it is mean to ease the body into a state of calmness and relaxation.",
  breaths: [|
    {title: "Inhale", duration: 4000, instructions: "Fully through the nose"},
    {title: "Hold", duration: 7000, instructions: ""},
    {
      title: "Exhale",
      duration: 8000,
      instructions: "Fully through the mouth",
    },
  |],
  repeat: 6,
};

let boxBreathing = {
  id: "box-breathing",
  title: "Box breathing",
  description: "Box breathing is a technique used to calm yourself down with a simple 4 second rotation of breathing in, holding your breath, breathing out, holding your breath, and repeating.",
  breaths: [|
    {title: "Inhale", duration: 4000, instructions: "Fully through the nose"},
    {title: "Hold", duration: 4000, instructions: ""},
    {
      title: "Exhale",
      duration: 4000,
      instructions: "Fully through the mouth",
    },
    {title: "Hold", duration: 4000, instructions: ""},
  |],
  repeat: 4,
};

let awake = {
  id: "awake",
  title: "Awake",
  description: "Boost your alertness early in the morning or during the afternoon to get a quick burst of energy and alertness. This is the perfect replacement for your double espresso!",
  breaths: [|
    {title: "Inhale", duration: 4000, instructions: "Fully through the nose"},
    {
      title: "Exhale",
      duration: 4000,
      instructions: "Fully through the mouth",
    },
  |],
  repeat: 6,
};

let exercises = [|awake, boxBreathing, deepCalm|];
