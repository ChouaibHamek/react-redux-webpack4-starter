import { renderComponent, expect } from '../../../utils/test_helper'
import HomePage from '../home_page'

describe('HomePage', () => {
  let component

  beforeEach(() => {
    component = renderComponent(HomePage)
  })

  it('It renders an element with class home-page', () => {
    expect(component).to.have.class('home-page')
  })
})
