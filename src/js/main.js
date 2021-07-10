const drawChart = require("./drawChart")
const formatData = require("./formatData")

require("../style.css")

module.exports = () => {
  const chartEl = document.getElementById("chart")
  const ctx = chartEl.getContext("2d")
  const chartElLeft = chartEl.offsetLeft
  const chartElTop = chartEl.offsetTop

  const chartWidth = 3300
  const chartHeight = 1000
  const padding = 150
  const gridLineColour = "rgba(29, 210, 175,0.3)"
  const columnTitleColour = "rgb(200,0,0)"

  const {cols, lines} = formatData()

  const labelCache = []

  drawChart(ctx, {
    chartWidth,
    chartHeight,
    padding,
    gridLineColour,
    columnTitleColour,
    cols,
    lines,
    onDataLabelDraw: (top, left, height, width, id) => {
      labelCache.push({top, left, height, width, id})
    },
  })

  const hoverEl = document.getElementById("hover")

  chartEl.addEventListener(
    "mousemove",
    function (event) {
      const x = event.pageX - chartElLeft
      const y = event.pageY - chartElTop

      hoverEl.style.display = "none"

      labelCache.forEach(function (l) {
        if (y > l.top && y < l.top + l.height && x > l.left && x < l.left + l.width) {
          hoverEl.style.display = "block"
          hoverEl.style.top = `${event.pageY + 10}px`
          hoverEl.style.left = `${event.pageX + 10}px`
          hoverEl.innerHTML = l.id.split("-")[1]
        }
      })
    },
    false,
  )
}
