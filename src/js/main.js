const drawChart = require("./drawChart")
const formatData = require("./formatData")

require("../style.css")

module.exports = () => {
  const chartEl = document.getElementById("chart")
  const ctx = chartEl.getContext("2d")
  const chartElLeft = chartEl.offsetLeft
  const chartElTop = chartEl.offsetTop

  const chartWidth = 7200
  const chartHeight = 900
  const gridLineColour = "rgba(29, 210, 175,0.3)"
  const columnTitleColour = "rgb(200,0,0)"

  const {cols, lines} = formatData()

  let labelCache = []
  let selectedLineId = undefined

  drawChart(ctx, {
    chartWidth,
    chartHeight,
    gridLineColour,
    columnTitleColour,
    cols,
    lines,
    onDataLabelDraw: (top, left, height, width, id, lineId) => {
      labelCache.push({top, left, height, width, id, lineId})
    },
  })

  document.addEventListener("scroll", function () {
    hoverEl.style.display = "none"
  })

  const hoverEl = document.getElementById("hover")

  chartEl.addEventListener(
    "mousemove",
    function (event) {
      const x = event.pageX - chartElLeft
      const y = event.pageY - chartElTop

      hoverEl.style.display = "none"
      chartEl.style.cursor = "auto"

      const match = labelCache.find((l) => {
        if (y > l.top && y < l.top + l.height && x > l.left && x < l.left + l.width) {
          return true
        }

        return false
      })

      if (match) {
        chartEl.style.cursor = "pointer"

        hoverEl.style.display = "block"
        hoverEl.style.top = `${event.pageY + 10}px`
        hoverEl.style.left = `${event.pageX + 10}px`
        hoverEl.innerHTML = match.id.split("-")[1]
      }
    },
    false,
  )

  chartEl.addEventListener(
    "click",
    function (event) {
      const x = event.pageX - chartElLeft
      const y = event.pageY - chartElTop

      hoverEl.style.display = "none"

      const match = labelCache.find((l) => {
        if (y > l.top && y < l.top + l.height && x > l.left && x < l.left + l.width) {
          return true
        }

        return false
      })

      if (match) {
        ctx.clearRect(0, 0, chartWidth, chartHeight)
        labelCache = []

        const lineIdToDraw = match.lineId === selectedLineId ? undefined : match.lineId

        drawChart(ctx, {
          chartWidth,
          chartHeight,
          gridLineColour,
          columnTitleColour,
          cols,
          lines,
          onDataLabelDraw: (top, left, height, width, id, lineId) => {
            labelCache.push({top, left, height, width, id, lineId})
          },
          selectedLineId: lineIdToDraw,
        })

        selectedLineId = lineIdToDraw
      }
    },
    false,
  )
}
