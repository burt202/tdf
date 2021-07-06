const drawChart = require("./drawChart")
const formatData = require("./formatData")

require("../style.css")

module.exports = () => {
  const ctx = document.getElementById("chart").getContext("2d")

  const chartWidth = 900
  const chartHeight = 450
  const padding = 100
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
