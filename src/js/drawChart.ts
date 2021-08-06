import * as R from "ramda"

interface Line {
  fillColour: string
  lineColour: string
  textColour: string
  points: Array<{
    id: string
    text: string
    coords: [number, number]
    lineId: string
  }>
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
  }: {
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
  },
) => {
  const dataLabelWidth = 225
  const dataLabelHeight = 30
  const topPadding = 50
  const bottomPadding = 20
  const sidePadding = 150
  const columnHeaderWidth = 40
  const font = "14px arial"

  const points = R.flatten(R.pluck("points", lines))
  const rowsPerColumn = R.pluck("coords", points).map((a) => R.last(a))

  const rowCount = Math.max(...rowsPerColumn)

  const columnWidth = chartWidth / (cols.length - 1)
  const rowHeight = chartHeight / rowCount

  ctx.canvas.width = chartWidth + 2 * sidePadding
  ctx.canvas.height = chartHeight + topPadding + bottomPadding

  function getColumnCoords(noOfCols: number, width: number) {
    let arr = []

    for (let i = 0; i < noOfCols - 1; i++) {
      const coord = (i + 1) * width + sidePadding
      arr.push(coord)
    }

    return [0 + sidePadding, ...arr]
  }

  function getRowCoords(noOfRows: number, height: number) {
    let arr = []

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
      const {coords, lineId} = points[j]

      ctx.strokeStyle = selectedLineId && selectedLineId !== lineId ? "#CCC" : lineColour
      ctx.lineWidth = 2

      if (j === 0) {
        const moveToX = coords[0] * columnWidth + sidePadding + dataLabelWidth / 2
        const moveToY = coords[1] * rowHeight + topPadding
        ctx.moveTo(moveToX, moveToY)
      } else {
        const lineToX = coords[0] * columnWidth + sidePadding - dataLabelWidth / 2
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
      const {text, coords, lineId} = points[j]

      const lineToX = coords[0] * columnWidth + sidePadding
      const lineToY = coords[1] * rowHeight + topPadding

      drawBorderedRoundedRectangle(
        lineToX - dataLabelWidth / 2,
        lineToY - dataLabelHeight / 2,
        dataLabelWidth,
        dataLabelHeight,
        8,
        selectedLineId && selectedLineId !== lineId ? "#DDD" : fillColour,
        selectedLineId && selectedLineId !== lineId ? "#DDD" : lineColour,
      )

      const top = lineToY - dataLabelHeight / 2
      const left = lineToX - dataLabelWidth / 2
      onDataLabelDraw(top, left, dataLabelHeight, dataLabelWidth, points[j].id, points[j].lineId)

      ctx.font = font
      ctx.fillStyle = selectedLineId && selectedLineId !== lineId ? "#FFF" : textColour
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
