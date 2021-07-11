const R = require("ramda")

const data = {
  2002: require("../../data/2002.json"),
  2003: require("../../data/2003.json"),
  2004: require("../../data/2004.json"),
  2005: require("../../data/2005.json"),
  2006: require("../../data/2006.json"),
  2007: require("../../data/2007.json"),
  2008: require("../../data/2008.json"),
  2009: require("../../data/2009.json"),
  2010: require("../../data/2010.json"),
  2011: require("../../data/2011.json"),
  2012: require("../../data/2012.json"),
  2013: require("../../data/2013.json"),
  2014: require("../../data/2014.json"),
  2015: require("../../data/2015.json"),
  2016: require("../../data/2016.json"),
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
    arr.push({
      text: match.name,
      id: `${edition}-${match.uciCode}`,
      colours: match.colours,
      coords: [i, foundIndex],
    })

    return rec(match.uciCode, edition + 1, i + 1, arr)
  }

  return arr
}

module.exports = () => {
  const cols = Object.keys(data)
  const sortedKeys = Object.keys(data).sort()

  let lines = []
  let usedCoords = {}

  sortedKeys.forEach((edition, i) => {
    const teams = data[edition].teams

    for (let j = 0; j < teams.length; j++) {
      if (usedCoords[`${i}-${j}`]) {
        continue
      }

      const points = [
        {
          text: teams[j].name,
          id: `${edition}-${teams[j].uciCode}`,
          colours: teams[j].colours,
          coords: [i, j],
        },
        ...rec(teams[j].uciCode, parseInt(edition, 10) + 1, i + 1, []),
      ]

      points.forEach((p) => {
        usedCoords[`${p.coords[0]}-${p.coords[1]}`] = true
      })

      const lastPoint = points[points.length - 1]

      lines.push({
        fillColour: lastPoint.colours ? lastPoint.colours[0] : "black",
        lineColour: lastPoint.colours ? lastPoint.colours[1] : "black",
        textColour: lastPoint.colours ? lastPoint.colours[2] : "white",
        points: R.map(R.omit("colours"), points),
      })
    }
  })

  return {cols, lines}
}
