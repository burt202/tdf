const init = require("./main")

init()

if (module.hot) {
  module.hot.accept("./main", () => {
    const init = require("./main")

    init()
  })
}
