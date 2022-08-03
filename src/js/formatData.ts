import * as R from "ramda"

import data from "../../data"
import {Season, Line, Point} from "./types"

function rec(
  uciCode: string,
  edition: number,
  i: number,
  arr: Array<Point>,
): Array<Point> {
  if (data[edition] === undefined) {
    return arr
  }

  const season = data[edition] as Season
  const {teams} = season

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

export default () => {
  const cols = Object.keys(data)
  const sortedKeys = Object.keys(data).sort()

  const lines = [] as Array<Line>
  const usedCoords = {}
  let autoIncrement = 1

  sortedKeys.forEach((edition, i) => {
    const season = data[edition] as Season
    const {teams} = season

    for (let j = 0; j < teams.length; j++) {
      if (usedCoords[`${i}-${j}`]) {
        continue
      }

      const points = [
        {
          text: teams[j].name,
          id: `${edition}-${teams[j].uciCode}`,
          colours: teams[j].colours,
          coords: [i, j] as [number, number],
        },
        ...rec(
          teams[j].uciCode,
          parseInt(edition, 10) + 1,
          i + 1,
          [] as Array<Point>,
        ),
      ]

      points.forEach((p) => {
        usedCoords[`${p.coords[0]}-${p.coords[1]}`] = true
      })

      const lastPoint = points[points.length - 1]

      lines.push({
        id: autoIncrement.toString(),
        fillColour: lastPoint.colours ? lastPoint.colours[0] : "black",
        lineColour: lastPoint.colours ? lastPoint.colours[1] : "black",
        textColour: lastPoint.colours ? lastPoint.colours[2] : "white",
        points: points.map((p) => ({
          id: p.id,
          text: p.text,
          coords: p.coords,
        })),
      })

      autoIncrement++
    }
  })

  return {cols, lines}
}
