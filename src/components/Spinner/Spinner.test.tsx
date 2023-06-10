import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spinner from './index';

const wrapper = shallow(<Spinner />);

describe('Spinner UI component', () => {
  it('Component match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('main component class exists', () => {
    expect(wrapper.find('.spinner').exists()).toBeTruthy();
  });
});
