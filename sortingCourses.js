let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

export const filterFunction = (courses, requiredRange) => {
  if (!requiredRange || (!requiredRange[0] && !requiredRange[1])) {
    return courses;
  } else {
    let requiredRangeFrom = requiredRange[0] || 0;
    let requiredRangeTo = requiredRange[1];
    return courses.filter((item) => {
      return (
        item.prices[1] != 0 &&
        (!requiredRangeTo || (item.prices[0] || 0) <= requiredRangeTo) &&
        (!requiredRangeFrom ||
          !item.prices[1] ||
          item.prices[1] >= requiredRangeFrom)
      );
    });
  }
};