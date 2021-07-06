require("../style.css")

module.exports = () => {
  const ctx = document.getElementById("chart").getContext("2d")

  const chartWidth = 900
  const chartHeight = 450
  const padding = 100
  const gridLineColour = "rgba(29, 210, 175,0.3)"
  const columnTitleColour = "rgb(200,0,0)"

  const cols = ["2017", "2018", "2019", "2020", "2021"]
  const rowCount = 5
  const lines = [
    {
      textColor: "white",
      lineColour: "black",
      points: [
        {text: "Team Sky", coords: [0, 1]},
        {text: "Team Sky", coords: [1, 4]},
        {text: "Team Sky", coords: [2, 1]},
        {text: "Team Sky", coords: [3, 2]},
        {text: "Team Sky", coords: [4, 1]},
      ],
    },
    {
      textColor: "white",
      lineColour: "rgb(200,0,0)",
      points: [
        {text: "BMC Racing", coords: [0, 2]},
        {text: "BMC Racing", coords: [1, 1]},
        {text: "BMC Racing", coords: [2, 0]},
        {text: "BMC Racing", coords: [3, 1]},
        {text: "BMC Racing", coords: [4, 2]},
      ],
    },
  ]

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

  function drawRoundedRectangle(x, y, width, height, radius) {
    if (width < 2 * radius) radius = width / 2
    if (height < 2 * radius) radius = height / 2

    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.arcTo(x + width, y, x + width, y + height, radius)
    ctx.arcTo(x + width, y + height, x, y + height, radius)
    ctx.arcTo(x, y + height, x, y, radius)
    ctx.arcTo(x, y, x + width, y, radius)
    ctx.closePath()
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

      ctx.strokeStyle = lines[i].lineColour
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

      ctx.fillStyle = lines[i].lineColour

      drawRoundedRectangle(lineToX - 75, lineToY - 20, 150, 40, 8)

      ctx.fill()
      ctx.font = "16px serif"
      ctx.fillStyle = lines[i].textColor
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
    drawDataLabels(i)
  }

  drawColumnHeaders()
}
