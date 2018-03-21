import { renderComponent, expect } from '../../../utils/test_helper';
import App from '../app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders an element with class app', () => {
    expect(component).to.have.class('app');
  });
});
