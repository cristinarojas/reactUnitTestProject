// Dependencies
import React from 'react'

// Components
import Todo from './Todo';

// Enzyme is a library from Airbnb that help us to test react components
import { configure, shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Creating our test suite & our individual test cases
describe("<Todo /> component Unit Tests", () => {

  // Because our component have some props
  const mockFn = jest.fn();
  const props = {
    onClick: mockFn,
    completed: false,
    text: "buy milk"
  }

  // Individual test case
  it("should render 1 <Todo /> component", () => {
    const component = shallow(<Todo {...props} />);

    // Assertions (affirmation)
    expect(component).toHaveLength(1);

    expect(component.find("li")).toHaveLength(3);
  })
})
