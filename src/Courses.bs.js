


var deepCalm_003 = /* breaths : array */[
  /* record */[
    /* duration */4000,
    /* title */"Inhale",
    /* instructions */"Fully through the nose"
  ],
  /* record */[
    /* duration */7000,
    /* title */"Hold",
    /* instructions */""
  ],
  /* record */[
    /* duration */8000,
    /* title */"Exhale",
    /* instructions */"Fully through the mouth"
  ]
];

var deepCalm = /* record */[
  /* id */"deep-calm",
  /* title */"Deep calm",
  /* description */"This breathing exercise is a natural tranquilizer for the nervous system. Inhaling, holding and then followed by a long exhale - it is mean to ease the body into a state of calmness and relaxation.",
  deepCalm_003,
  /* repeat */6
];

var boxBreathing_003 = /* breaths : array */[
  /* record */[
    /* duration */4000,
    /* title */"Inhale",
    /* instructions */"Fully through the nose"
  ],
  /* record */[
    /* duration */4000,
    /* title */"Hold",
    /* instructions */""
  ],
  /* record */[
    /* duration */4000,
    /* title */"Exhale",
    /* instructions */"Fully through the mouth"
  ],
  /* record */[
    /* duration */4000,
    /* title */"Hold",
    /* instructions */""
  ]
];

var boxBreathing = /* record */[
  /* id */"box-breathing",
  /* title */"Box breathing",
  /* description */"Box breathing is a technique used to calm yourself down with a simple 4 second rotation of breathing in, holding your breath, breathing out, holding your breath, and repeating.",
  boxBreathing_003,
  /* repeat */4
];

var awake_003 = /* breaths : array */[
  /* record */[
    /* duration */4000,
    /* title */"Inhale",
    /* instructions */"Fully through the nose"
  ],
  /* record */[
    /* duration */4000,
    /* title */"Exhale",
    /* instructions */"Fully through the mouth"
  ]
];

var awake = /* record */[
  /* id */"awake",
  /* title */"Awake",
  /* description */"Boost your alertness early in the morning or during the afternoon to get a quick burst of energy and alertness. This is the perfect replacement for your double espresso!",
  awake_003,
  /* repeat */6
];

var exercises = /* array */[
  awake,
  boxBreathing,
  deepCalm
];

export {
  deepCalm ,
  boxBreathing ,
  awake ,
  exercises ,
  
}
/* No side effect */
