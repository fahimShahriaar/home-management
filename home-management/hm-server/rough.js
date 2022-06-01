const doc = {
  name: "Fahim",
  mobile: "01717111111",
  meals: [
    {
      mealCount: 2,
      bazarCost: 200,
      _id: { $oid: "628a484b90ac35834ac822f5" },
      datetime: "2022-05-22T14:27:37.943+00:00",
    },
    {
      mealCount: 1,
      bazarCost: 200,
      _id: { $oid: "628a485990ac35834ac822f8" },
      datetime: { $date: { $numberLong: "1653229657943" } },
    },
  ],
  createdAt: { $date: { $numberLong: "1653229643293" } },
  updatedAt: { $date: { $numberLong: "1653229657940" } },
};
