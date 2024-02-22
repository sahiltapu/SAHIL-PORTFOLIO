export const profession = [
  "Software Developer",
  "Web Developer",
  "Data Analyst",
  "Coder",
];
export const getRandomProfession = () => {
  return profession[Math.floor(Math.random() * profession.length)];
};
