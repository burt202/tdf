const drawChart = require("./drawChart")
const formatData = require("./formatData")

require("../style.css")

module.exports = () => {
  const ctx = document.getElementById("chart").getContext("2d")

  const chartWidth = 1500
  const chartHeight = 1000
  const padding = 150
  const gridLineColour = "rgba(29, 210, 175,0.3)"
  const columnTitleColour = "rgb(200,0,0)"

  const {cols, lines} = formatData()

  drawChart(ctx, {
    chartWidth,
    chartHeight,
    padding,
    gridLineColour,
    columnTitleColour,
    cols,
    lines,
  })
}
