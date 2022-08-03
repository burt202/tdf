export interface Season {
  id: string
  startDate: string
  endDate: string
  teams: Array<{
    uciCode: string
    previousUciCode: string
    name: string
    colours?: Array<string>
  }>
}

export interface Line {
  fillColour: string
  lineColour: string
  textColour: string
  points: Array<{
    text: string
    id: string
    coords: [number, number]
    lineId: string
  }>
}
