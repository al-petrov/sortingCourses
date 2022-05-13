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
  if (
    !requiredRange ||
    !courses ||
    !courses.length ||
    (!requiredRange[0] && !requiredRange[1])
  ) {
    return courses;
  } else {
    let requiredRangeFrom = requiredRange[0] || 0;
    let requiredRangeTo = requiredRange[1];
    return courses.filter((item) => {
      let itemPriceStart = item.prices[0] || 0;
      if (!requiredRangeTo) {
        return !item.prices[1] || item.prices[1] >= requiredRangeFrom;
      } else {
        if (!item.prices[1]) return itemPriceStart <= requiredRangeTo;
        else {
          return (
            item.prices[1] >= requiredRangeFrom &&
            itemPriceStart <= requiredRangeTo
          );
        }
      }
    });
  }
};

let sortingCourses = (courses, direction, price) => {
    if (direction === 1) {
        courses.sort((a, b) => {
            if (price === 0) {
                if ((a.prices[price] || 0) > (b.prices[price] || 0)) {
                    return 1
                } else {
                    return -1
                }
            } else {
                if (((a.prices[price] > b.prices[price]) && (b.prices[price] != null)) || ((a.prices[price] === null) && (b.prices[price] != null))) {
                    console.log(1)
                    return 1
                } else {
                    console.log(-1)
                    return -1
                }
            }
        })
    } else {
        courses.sort((a, b) => {
           if (price === 0) {
                if ((a.prices[price] || 0) < (b.prices[price] || 0)) {
                    return 1
                } else {
                    return -1
                }
            } else {
                if (((a.prices[price] < b.prices[price]) && (a.prices[price] != null)) || ((b.prices[price] === null) && (a.prices[price] != null))) {
                    console.log(1)
                    return 1
                } else {
                    console.log(-1)
                    return -1
                }
            }
        })
    }
    return courses;
}
