export const pointMaker = (point: number) => {
  if (point >= 0 && point <= 100) {
    return { name: "beginner", color: "#2F3239" };
  } else if (point > 100 && point <= 150) {
    return { name: "teacher", color: "#DD3333" };
  } else if (point > 150 && point <= 250) {
    return { name: "pundit", color: "#dd9933" };
  } else if (point > 250 && point <= 500) {
    return { name: "explainer", color: "#81d742" };
  } else if (point > 500 && point <= 1000) {
    return {
      name: "professional",
      color: "#1e73be",
    };
  } else if (point > 1000) {
    return { name: "enlightened", color: "#8224e3" };
  }
};
