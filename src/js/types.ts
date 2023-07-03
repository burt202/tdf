export interface Season {
  id: string
  teams: Array<{
    uciCode: string
    previousUciCode: string | null
    name: string
    colours?: Array<string>
  }>
}

export interface Point {
  text: string
  id: string
  colours: Array<string>
  coords: [number, number]
}

export interface Line {
  id: string
  fillColour: string
  lineColour: string
  textColour: string
  points: Array<Omit<Point, "colours">>
}

export interface Label {
  top: number
  left: number
  height: number
  width: number
  id: string
  lineId: string
}
