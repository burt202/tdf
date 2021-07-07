const R = require("ramda")

const data = {
  2017: require("../../data/2017.json"),
  2018: require("../../data/2018.json"),
  2019: require("../../data/2019.json"),
  2020: require("../../data/2020.json"),
  2021: require("../../data/2021.json"),
}

function rec(uciCode, edition, i, arr) {
  if (data[edition] === undefined) {
    return arr
  }

  const teams = data[edition].teams

  const foundIndex = R.findIndex((t) => t.previousUciCode === uciCode, teams)

  if (foundIndex > -1) {
    const match = teams[foundIndex]
    arr.push({text: match.name, coords: [i, foundIndex]})

    return rec(match.uciCode, edition + 1, i + 1, arr)
  }

  return arr
}

module.exports = () => {
  const cols = Object.keys(data)
  const sortedKeys = Object.keys(data).sort()

  let lines = []

  sortedKeys.forEach((edition, i) => {
    const teams = data[edition].teams

    for (let j = 0; j < teams.length; j++) {
      const points = [
        {text: teams[j].name, coords: [i, j]},
        ...rec(teams[j].uciCode, parseInt(edition, 10) + 1, i + 1, []),
      ]

      lines.push({textColor: "white", lineColour: "black", points})
    }
  })

  // TODO sort colours, remove R.take

  return {cols, lines: R.take(5, lines)}
}
