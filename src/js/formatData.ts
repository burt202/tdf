/* eslint-disable @typescript-eslint/no-var-requires */

import * as R from "ramda"

import {Season, Line} from "./types"

const data = {
  2000: require("../../data/2000.json") as Season,
  2001: require("../../data/2001.json") as Season,
  2002: require("../../data/2002.json") as Season,
  2003: require("../../data/2003.json") as Season,
  2004: require("../../data/2004.json") as Season,
  2005: require("../../data/2005.json") as Season,
  2006: require("../../data/2006.json") as Season,
  2007: require("../../data/2007.json") as Season,
  2008: require("../../data/2008.json") as Season,
  2009: require("../../data/2009.json") as Season,
  2010: require("../../data/2010.json") as Season,
  2011: require("../../data/2011.json") as Season,
  2012: require("../../data/2012.json") as Season,
  2013: require("../../data/2013.json") as Season,
  2014: require("../../data/2014.json") as Season,
  2015: require("../../data/2015.json") as Season,
  2016: require("../../data/2016.json") as Season,
  2017: require("../../data/2017.json") as Season,
  2018: require("../../data/2018.json") as Season,
  2019: require("../../data/2019.json") as Season,
  2020: require("../../data/2020.json") as Season,
  2021: require("../../data/2021.json") as Season,
}

interface Point {
  text: string
  id: string
  colours: Array<string>
  coords: [number, number]
}

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
        fillColour: lastPoint.colours ? lastPoint.colours[0] : "black",
        lineColour: lastPoint.colours ? lastPoint.colours[1] : "black",
        textColour: lastPoint.colours ? lastPoint.colours[2] : "white",
        points: points.map((p) => ({
          id: p.id,
          text: p.text,
          coords: p.coords,
          lineId: autoIncrement.toString(),
        })),
      })

      autoIncrement++
    }
  })

  return {cols, lines}
}
