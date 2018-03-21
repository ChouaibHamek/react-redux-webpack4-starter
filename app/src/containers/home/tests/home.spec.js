import { renderComponent, expect } from '../../../utils/test_helper';
import Home from '../home';

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('renders an element with class home', () => {
    expect(component).to.have.class('home');
  });
});
