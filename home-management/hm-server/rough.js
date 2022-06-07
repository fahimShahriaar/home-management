const memberMeals = [
  {
    _id: "62963903e38f2c1b60a6110c",
    name: "Fahim",
    mobile: "01717111111",
    meals: [
      {
        mealCount: 3,
        bazarCost: 200,
        _id: "62963903e38f2c1b60a6110d",
        datetime: "2022-05-31T15:49:23.318Z",
      },
      {
        mealCount: 2,
        bazarCost: 0,
        _id: "62977568ef5e536d14eaeca3",
        datetime: "2022-06-01T14:19:20.107Z",
      },
    ],
    updatedAt: "2022-06-01T14:19:20.113Z",
  },
  {
    _id: "629775b6ef5e536d14eaeca7",
    name: "Shahriar",
    mobile: "01717222222",
    meals: [
      {
        mealCount: 1,
        bazarCost: 500,
        _id: "629775b6ef5e536d14eaeca8",
        datetime: "2022-06-01T14:20:38.641Z",
      },
      {
        mealCount: 2,
        bazarCost: 0,
        _id: "629779473349ee602c765a16",
        datetime: "2022-06-01T14:35:51.035Z",
      },
      {
        mealCount: 1,
        bazarCost: 500,
        _id: "629a1726456dcfbcfe5ef592",
        datetime: "2022-06-03T14:13:58.764Z",
      },
    ],
    updatedAt: "2022-06-03T16:39:09.632Z",
  },
  {
    _id: "6299a1c1456dcfbcfe5ef58d",
    name: "Mahin",
    mobile: "01717333333",
    meals: [
      {
        mealCount: 3,
        bazarCost: 500,
        _id: "6299a1c1456dcfbcfe5ef58e",
        datetime: "2022-06-03T05:53:05.224Z",
      },
      {
        mealCount: 2,
        bazarCost: 700,
        _id: "629b61495213783150d8ad7e",
        datetime: "2022-06-04T13:42:33.727Z",
      },
      {
        mealCount: 2,
        bazarCost: 400,
        _id: "629b76e17831b94ea69b3c2d",
        datetime: "2022-06-04T15:14:41.761Z",
      },
    ],
    updatedAt: "2022-06-04T15:14:41.749Z",
  },
  {
    _id: "629e10e2176cefb47b51633e",
    name: "A",
    mobile: "01818111111",
    meals: [
      {
        mealCount: 1,
        bazarCost: 600,
        localDate: "2022-06-06",
        localTime: "8:27:52 PM",
        _id: "629e10e2176cefb47b51633f",
        datetime: "2022-06-06T14:36:18.955Z",
      },
      {
        mealCount: 2,
        bazarCost: 700,
        localDate: "2022-06-07",
        localTime: "8:27:52 PM",
        _id: "629e10f6176cefb47b516344",
        datetime: "2022-06-06T14:36:38.737Z",
      },
      {
        mealCount: 3,
        bazarCost: 500,
        localDate: "2022-06-08",
        localTime: "8:27:52 PM",
        _id: "629e1141176cefb47b51634f",
        datetime: "2022-06-06T14:37:53.288Z",
      },
    ],
    updatedAt: "2022-06-06T14:39:33.731Z",
  },
  {
    _id: "629e1e967f1c72e95652716b",
    name: "B",
    mobile: "01818222222",
    meals: [
      {
        mealCount: 1,
        bazarCost: 600,
        localDate: "2022-06-06",
        localTime: "9:33:06 PM",
        _id: "629e1e967f1c72e95652716c",
        datetime: "2022-06-06T15:34:46.371Z",
      },
      {
        mealCount: 2,
        bazarCost: 500,
        localDate: "2022-06-07",
        localTime: "9:33:06 PM",
        _id: "629e1ea77f1c72e956527176",
        datetime: "2022-06-06T15:35:03.606Z",
      },
      {
        mealCount: 3,
        bazarCost: 0,
        localDate: "2022-06-08",
        localTime: "9:33:06 PM",
        _id: "629e1eb27f1c72e95652717d",
        datetime: "2022-06-06T15:35:14.565Z",
      },
    ],
    updatedAt: "2022-06-06T15:35:35.562Z",
  },
  {
    _id: "629f551368acae1722f1373f",
    name: "C",
    mobile: "01818333333",
    meals: [
      {
        mealCount: 1,
        bazarCost: 500,
        localDate: "2022-06-07",
        localTime: "7:37:27 PM",
        _id: "629f551368acae1722f13740",
        datetime: "2022-06-07T13:39:31.041Z",
      },
      {
        mealCount: 2,
        bazarCost: 700,
        localDate: "2022-06-08",
        localTime: "7:37:27 PM",
        _id: "629f554168acae1722f1374a",
        datetime: "2022-06-07T13:40:17.045Z",
      },
      {
        mealCount: 3,
        bazarCost: 500,
        localDate: "2022-06-09",
        localTime: "7:37:27 PM",
        _id: "629f554f68acae1722f13754",
        datetime: "2022-06-07T13:40:31.045Z",
      },
    ],
    updatedAt: "2022-06-07T13:41:09.990Z",
  },
];
let totalMeals = 0;
let totalBazarCost = 0;
for (const singleMember of memberMeals) {
  // console.log(singleMember);
  // console.log("==============================================");
  // console.log("==============================================");
  // console.log("==============================================");
  for (const meal of singleMember.meals) {
    // console.log(meal);
    // console.log("==============================================");
    // console.log("==============================================");
    totalMeals += meal.mealCount;
    totalBazarCost += meal.bazarCost;
  }
}
let perMealCost = totalBazarCost / totalMeals;

console.log("totalMeals", totalMeals);
console.log("totalBazarCost", totalBazarCost);
console.log(`perMealCost: ${Math.ceil(perMealCost)}`);
