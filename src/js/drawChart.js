const R = require("ramda")

module.exports = (
  ctx,
  {chartWidth, chartHeight, padding, gridLineColour, columnTitleColour, cols, lines},
) => {
  const rowCount = R.pipe(R.pluck("points"), R.flatten, R.pluck("coords"), R.map(R.last), (arr) =>
    Math.max.apply(null, arr),
  )(lines)

  const columnWidth = chartWidth / (cols.length - 1)
  const rowHeight = chartHeight / rowCount

  ctx.canvas.width = chartWidth + 2 * padding
  ctx.canvas.height = chartHeight + 2 * padding

  function getColumnCoords(noOfCols, width) {
    let arr = []

    for (let i = 0; i < noOfCols - 1; i++) {
      const coord = (i + 1) * width + padding
      arr.push(coord)
    }

    return [0 + padding, ...arr]
  }

  function getRowCoords(noOfRows, height) {
    let arr = []

    for (let i = 0; i < noOfRows; i++) {
      const coord = height - (i + 1) * (height / noOfRows) + padding
      arr.push(coord)
    }

    return [height + padding, ...arr]
  }

  function drawBorderedRoundedRectangle(x, y, width, height, radius, fillColour, borderColour) {
    ctx.fillStyle = fillColour
    ctx.strokeStyle = borderColour

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
      ctx.moveTo(columnCoords[i], padding)
      ctx.lineTo(columnCoords[i], chartHeight + padding)
    }

    ctx.stroke()
  }

  function drawHorizontalGridLines() {
    for (let i = 1; i < rowCoords.length - 1; i++) {
      ctx.strokeStyle = gridLineColour
      ctx.lineWidth = 1
      ctx.moveTo(padding, rowCoords[i])
      ctx.lineTo(chartWidth + padding, rowCoords[i])
    }

    ctx.stroke()
  }

  function drawDataLines(i) {
    const linePoints = lines[i].points

    ctx.beginPath()

    const moveToX = linePoints[0].coords[0] * columnWidth + padding
    const moveToY = linePoints[0].coords[1] * rowHeight + padding
    ctx.moveTo(moveToX, moveToY)

    for (let j = 0; j < linePoints.length; j++) {
      const coords = linePoints[j].coords

      ctx.strokeStyle = lines[i].borderColour
      ctx.lineWidth = 2

      const lineToX = coords[0] * columnWidth + padding
      const lineToY = coords[1] * rowHeight + padding
      ctx.lineTo(lineToX, lineToY)
      ctx.stroke()
    }

    ctx.closePath()
  }

  function drawDataLabels(i) {
    const linePoints = lines[i].points

    for (let j = 0; j < linePoints.length; j++) {
      const text = linePoints[j].text
      const coords = linePoints[j].coords

      const lineToX = coords[0] * columnWidth + padding
      const lineToY = coords[1] * rowHeight + padding

      drawBorderedRoundedRectangle(
        lineToX - 125,
        lineToY - 20,
        250,
        40,
        8,
        lines[i].lineColour,
        lines[i].borderColour,
      )

      ctx.font = "16px serif"
      ctx.fillStyle = lines[i].textColour
      ctx.textAlign = "center"
      ctx.fillText(text, lineToX, lineToY + 5)
    }
  }

  function drawColumnHeaders() {
    ctx.font = "16px serif"
    ctx.fillStyle = columnTitleColour
    ctx.textAlign = "left"

    for (let i = 0; i < cols.length; i++) {
      const x = padding - 20 + i * columnWidth
      ctx.fillText(cols[i], x, 40)
    }
  }

  const columnCoords = getColumnCoords(cols.length, columnWidth)
  const rowCoords = getRowCoords(rowCount, chartHeight)

  drawVerticalGridLines()
  drawHorizontalGridLines()

  for (let i = 0; i < lines.length; i++) {
    drawDataLines(i)
  }

  for (let i = 0; i < lines.length; i++) {
    drawDataLabels(i)
  }

  drawColumnHeaders()
}
