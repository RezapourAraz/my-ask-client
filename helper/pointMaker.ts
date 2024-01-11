export const pointMaker = (point: number) => {
  if (point >= 0 && point <= 100) {
    return { name: "Beginner", color: "#2F3239" };
  } else if (point > 100 && point <= 150) {
    return { name: "Teacher", color: "#DD3333" };
  } else if (point > 150 && point <= 250) {
    return { name: "Pundit", color: "#dd9933" };
  } else if (point > 250 && point <= 500) {
    return { name: "Explainer", color: "#81d742" };
  } else if (point > 500 && point <= 1000) {
    return {
      name: "Professional",
      color: "#1e73be",
    };
  } else if (point > 1000) {
    return { name: "Enlightened", color: "#8224e3" };
  }
};
