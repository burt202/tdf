module.exports = () => {
  const cols = ["2017", "2018", "2019", "2020", "2021"]
  const lines = [
    {
      textColor: "white",
      lineColour: "black",
      points: [
        {text: "Team Sky", coords: [0, 1]},
        {text: "Team Sky", coords: [1, 4]},
        {text: "Team Sky", coords: [2, 1]},
        {text: "Team Sky", coords: [3, 2]},
        {text: "Team Sky", coords: [4, 1]},
      ],
    },
    {
      textColor: "white",
      lineColour: "rgb(200,0,0)",
      points: [
        {text: "BMC Racing", coords: [0, 2]},
        {text: "BMC Racing", coords: [1, 1]},
        {text: "BMC Racing", coords: [2, 0]},
        {text: "BMC Racing", coords: [3, 1]},
        {text: "BMC Racing", coords: [4, 2]},
      ],
    },
  ]

  return {cols, lines}
}
