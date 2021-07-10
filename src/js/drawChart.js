const R = require("ramda")

module.exports = (
  ctx,
  {chartWidth, chartHeight, gridLineColour, columnTitleColour, cols, lines, onDataLabelDraw},
) => {
  const dataLabelWidth = 250
  const dataLabelHeight = 40
  const topBottomPadding = 100
  const sidePadding = 150

  const rowCount = R.pipe(R.pluck("points"), R.flatten, R.pluck("coords"), R.map(R.last), (arr) =>
    Math.max.apply(null, arr),
  )(lines)

  const columnWidth = chartWidth / (cols.length - 1)
  const rowHeight = chartHeight / rowCount

  ctx.canvas.width = chartWidth + 2 * sidePadding
  ctx.canvas.height = chartHeight + 2 * topBottomPadding

  function getColumnCoords(noOfCols, width) {
    let arr = []

    for (let i = 0; i < noOfCols - 1; i++) {
      const coord = (i + 1) * width + sidePadding
      arr.push(coord)
    }

    return [0 + sidePadding, ...arr]
  }

  function getRowCoords(noOfRows, height) {
    let arr = []

    for (let i = 0; i < noOfRows; i++) {
      const coord = height - (i + 1) * (height / noOfRows) + topBottomPadding
      arr.push(coord)
    }

    return [height + topBottomPadding, ...arr]
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
      ctx.moveTo(columnCoords[i], topBottomPadding)
      ctx.lineTo(columnCoords[i], chartHeight + topBottomPadding)
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

  function drawDataLines(line) {
    const {points, lineColour} = line

    ctx.beginPath()

    for (let j = 0; j < points.length; j++) {
      const coords = points[j].coords

      ctx.strokeStyle = lineColour
      ctx.lineWidth = 2

      if (j === 0) {
        const moveToX = coords[0] * columnWidth + sidePadding + dataLabelWidth / 2
        const moveToY = coords[1] * rowHeight + topBottomPadding
        ctx.moveTo(moveToX, moveToY)
      } else {
        const lineToX = coords[0] * columnWidth + sidePadding - dataLabelWidth / 2
        const lineToY = coords[1] * rowHeight + topBottomPadding

        ctx.lineTo(lineToX, lineToY)
        ctx.stroke()

        ctx.moveTo(lineToX + dataLabelWidth, lineToY)
      }
    }

    ctx.closePath()
  }

  function drawDataLabels(line) {
    const {points, fillColour, lineColour, textColour} = line

    for (let j = 0; j < points.length; j++) {
      const text = points[j].text
      const coords = points[j].coords

      const lineToX = coords[0] * columnWidth + sidePadding
      const lineToY = coords[1] * rowHeight + topBottomPadding

      drawBorderedRoundedRectangle(
        lineToX - dataLabelWidth / 2,
        lineToY - dataLabelHeight / 2,
        dataLabelWidth,
        dataLabelHeight,
        8,
        fillColour,
        lineColour,
      )

      const top = lineToY - dataLabelHeight / 2
      const left = lineToX - dataLabelWidth / 2
      onDataLabelDraw(top, left, dataLabelHeight, dataLabelWidth, points[j].id)

      ctx.font = "16px arial"
      ctx.fillStyle = textColour
      ctx.textAlign = "center"
      ctx.fillText(text, lineToX, lineToY + 5)
    }
  }

  function drawColumnHeaders() {
    ctx.font = "16px arial"
    ctx.fillStyle = columnTitleColour
    ctx.textAlign = "left"

    for (let i = 0; i < cols.length; i++) {
      const x = sidePadding - 20 + i * columnWidth
      ctx.fillText(cols[i], x, 40)
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
