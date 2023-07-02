import * as R from "ramda"

import {Line, Point} from "./types"

interface Props {
  chartWidth: number
  chartHeight: number
  gridLineColour: string
  columnTitleColour: string
  cols: Array<string>
  lines: Array<Line>
  onDataLabelDraw: (
    top: number,
    left: number,
    height: number,
    width: number,
    id: string,
    lineId: string,
  ) => void
  selectedLineId?: string
}

export default (
  ctx: CanvasRenderingContext2D,
  {
    chartWidth,
    chartHeight,
    gridLineColour,
    columnTitleColour,
    cols,
    lines,
    onDataLabelDraw,
    selectedLineId,
  }: Props,
) => {
  const dataLabelWidth = 240
  const dataLabelHeight = 30
  const topPadding = 50
  const bottomPadding = 20
  const sidePadding = 150
  const columnHeaderWidth = 40
  const font = "bold 14px arial"

  const rowCount = R.pipe(
    R.pluck("points"),
    R.flatten<Array<Omit<Point, "colours">>>,
    R.pluck("coords"),
    R.map(R.last),
    (arr: Array<number>) => Math.max.apply(null, arr) as number,
  )(lines)

  const columnWidth = chartWidth / (cols.length - 1)
  const rowHeight = chartHeight / rowCount

  ctx.canvas.width = chartWidth + 2 * sidePadding
  ctx.canvas.height = chartHeight + topPadding + bottomPadding

  function getColumnCoords(noOfCols: number, width: number) {
    const arr = [] as Array<number>

    for (let i = 0; i < noOfCols - 1; i++) {
      const coord = (i + 1) * width + sidePadding
      arr.push(coord)
    }

    return [0 + sidePadding, ...arr]
  }

  function getRowCoords(noOfRows: number, height: number) {
    const arr = [] as Array<number>

    for (let i = 0; i < noOfRows; i++) {
      const coord = height - (i + 1) * (height / noOfRows) + topPadding
      arr.push(coord)
    }

    return [height + topPadding, ...arr]
  }

  function drawBorderedRoundedRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fillColour: string,
    borderColour: string,
  ) {
    ctx.fillStyle = fillColour
    ctx.strokeStyle = borderColour
    ctx.lineWidth = 4

    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
  }

  function drawVerticalGridLines() {
    for (let i = 1; i < columnCoords.length - 1; i++) {
      ctx.strokeStyle = gridLineColour
      ctx.lineWidth = 1
      ctx.moveTo(columnCoords[i], topPadding)
      ctx.lineTo(columnCoords[i], chartHeight + topPadding)
    }

    ctx.stroke()
  }

  function drawHorizontalGridLines() {
    for (let i = 1; i < rowCoords.length - 1; i++) {
      ctx.strokeStyle = gridLineColour
      ctx.lineWidth = 1
      ctx.moveTo(sidePadding, rowCoords[i])
      ctx.lineTo(chartWidth + sidePadding, rowCoords[i])
    }

    ctx.stroke()
  }

  function drawDataLines(line: Line) {
    const {points, lineColour} = line

    ctx.beginPath()

    for (let j = 0; j < points.length; j++) {
      const {coords} = points[j]

      ctx.strokeStyle =
        selectedLineId && selectedLineId !== line.id ? "#CCC" : lineColour
      ctx.lineWidth = 2

      if (j === 0) {
        const moveToX =
          coords[0] * columnWidth + sidePadding + dataLabelWidth / 2
        const moveToY = coords[1] * rowHeight + topPadding
        ctx.moveTo(moveToX, moveToY)
      } else {
        const lineToX =
          coords[0] * columnWidth + sidePadding - dataLabelWidth / 2
        const lineToY = coords[1] * rowHeight + topPadding

        ctx.lineTo(lineToX, lineToY)
        ctx.stroke()

        ctx.moveTo(lineToX + dataLabelWidth, lineToY)
      }
    }

    ctx.closePath()
  }

  function drawDataLabels(line: Line) {
    const {points, fillColour, lineColour, textColour} = line

    for (let j = 0; j < points.length; j++) {
      const {text, coords} = points[j]

      const lineToX = coords[0] * columnWidth + sidePadding
      const lineToY = coords[1] * rowHeight + topPadding

      drawBorderedRoundedRectangle(
        lineToX - dataLabelWidth / 2,
        lineToY - dataLabelHeight / 2,
        dataLabelWidth,
        dataLabelHeight,
        8,
        selectedLineId && selectedLineId !== line.id ? "#DDD" : fillColour,
        selectedLineId && selectedLineId !== line.id ? "#DDD" : lineColour,
      )

      const top = lineToY - dataLabelHeight / 2
      const left = lineToX - dataLabelWidth / 2
      onDataLabelDraw(
        top,
        left,
        dataLabelHeight,
        dataLabelWidth,
        points[j].id,
        line.id,
      )

      ctx.font = font
      ctx.fillStyle =
        selectedLineId && selectedLineId !== line.id ? "#FFF" : textColour
      ctx.textAlign = "center"
      ctx.fillText(text, lineToX, lineToY + 5)
    }
  }

  function drawColumnHeaders() {
    ctx.font = font
    ctx.fillStyle = columnTitleColour
    ctx.textAlign = "left"

    for (let i = 0; i < cols.length; i++) {
      const x = sidePadding - columnHeaderWidth / 2 + i * columnWidth
      ctx.fillText(cols[i], x, topPadding - dataLabelHeight)
    }
  }

  const columnCoords = getColumnCoords(cols.length, columnWidth)
  const rowCoords = getRowCoords(rowCount, chartHeight)

  drawVerticalGridLines()
  drawHorizontalGridLines()

  for (let i = 0; i < lines.length; i++) {
    drawDataLines(lines[i])
  }

  for (let i = 0; i < lines.length; i++) {
    drawDataLabels(lines[i])
  }

  drawColumnHeaders()
}
