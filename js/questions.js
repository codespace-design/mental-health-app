const questions = [
  { text: "How often do you feel overwhelmed by tasks?", options: ["Never","Sometimes","Often","Always"], metric: "stress" },
  { text: "Do you delay tasks even when deadlines are near?", options: ["Never","Sometimes","Often","Always"], metric: "procrastination" },
  { text: "How often do you feel restless or anxious?", options: ["Never","Sometimes","Often","Always"], metric: "anxiety" },
  { text: "Do you find it hard to concentrate on one task?", options: ["Never","Sometimes","Often","Always"], metric: "stress" },
  { text: "How often do you feel tired even after resting?", options: ["Never","Sometimes","Often","Always"], metric: "stress" },
  { text: "Do you avoid tasks you think are difficult?", options: ["Never","Sometimes","Often","Always"], metric: "procrastination" },
  { text: "How often do you experience racing thoughts?", options: ["Never","Sometimes","Often","Always"], metric: "anxiety" },
  { text: "Do you practice relaxation (breathing, hobbies, meditation)?", options: ["Always","Often","Sometimes","Never"], metric: "relaxation" },
  { text: "How often do you feel irritated or impatient?", options: ["Never","Sometimes","Often","Always"], metric: "stress" },
  { text: "Do you find it hard to start tasks even if they are important?", options: ["Never","Sometimes","Often","Always"], metric: "procrastination" },
  { text: "How often do you feel uneasy without knowing why?", options: ["Never","Sometimes","Often","Always"], metric: "anxiety" },
  { text: "Do you take breaks to calm your mind during work/study?", options: ["Always","Often","Sometimes","Never"], metric: "relaxation" },
  { text: "Would you feel comfortable talking to a friend or professional if stressed?", options: ["Always","Often","Sometimes","Never"], metric: "stigma" },
  { text: "Do you think seeking help for mental health is normal?", options: ["Always","Often","Sometimes","Never"], metric: "stigma" },
  { text: "Do you acknowledge your feelings without judgment?", options: ["Always","Often","Sometimes","Never"], metric: "selfcare" }
];

const scores = { "Never": 0, "Sometimes": 1, "Often": 2, "Always": 3 };
