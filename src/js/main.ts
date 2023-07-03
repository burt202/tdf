import drawChart from "./drawChart"
import formatData from "./formatData"
import {Label} from "./types"

import "../style.css"

export default () => {
  const chartEl = document.getElementById("chart") as HTMLCanvasElement
  const ctx = chartEl.getContext("2d")

  const chartElLeft = chartEl.offsetLeft
  const chartElTop = chartEl.offsetTop

  const {cols, lines} = formatData()

  let labelCache = [] as Array<Label>
  let selectedLineId = undefined

  drawChart(ctx, {
    cols,
    lines,
    onDataLabelDraw: (
      top: number,
      left: number,
      height: number,
      width: number,
      id: string,
      lineId: string,
    ) => {
      labelCache.push({top, left, height, width, id, lineId})
    },
  })

  // SEARCH

  const search = document.getElementById("search") as HTMLInputElement

  search.addEventListener("input", (e: Event & {target: HTMLInputElement}) => {
    const searchTerm = e.target.value

    drawChart(ctx, {
      cols,
      lines,
      onDataLabelDraw: (
        top: number,
        left: number,
        height: number,
        width: number,
        id: string,
        lineId: string,
      ) => {
        labelCache.push({top, left, height, width, id, lineId})
      },
      searchTerm,
    })
  })

  // TOOLTIP

  const hoverEl = document.getElementById("hover")

  document.addEventListener("scroll", function () {
    hoverEl.style.display = "none"
  })

  chartEl.addEventListener(
    "mousemove",
    function (event) {
      const x = event.pageX - chartElLeft
      const y = event.pageY - chartElTop

      hoverEl.style.display = "none"
      chartEl.style.cursor = "auto"

      const match = labelCache.find((l) => {
        if (
          y > l.top &&
          y < l.top + l.height &&
          x > l.left &&
          x < l.left + l.width
        ) {
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

  // CLICK

  chartEl.addEventListener(
    "click",
    function (event) {
      const x = event.pageX - chartElLeft
      const y = event.pageY - chartElTop

      hoverEl.style.display = "none"

      search.value = ""

      const match = labelCache.find((l) => {
        if (
          y > l.top &&
          y < l.top + l.height &&
          x > l.left &&
          x < l.left + l.width
        ) {
          return true
        }

        return false
      })

      if (match) {
        labelCache = [] as Array<Label>

        const lineIdToDraw =
          match.lineId === selectedLineId ? undefined : match.lineId

        drawChart(ctx, {
          cols,
          lines,
          onDataLabelDraw: (
            top: number,
            left: number,
            height: number,
            width: number,
            id: string,
            lineId: string,
          ) => {
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
