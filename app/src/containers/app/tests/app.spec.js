import { renderComponent, expect } from '../../../utils/test_helper.js'
import App from '../app.js'

describe("App", () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it("It renders an element with class App", () => {
    expect(component).to.have.class('app')
  })
})
