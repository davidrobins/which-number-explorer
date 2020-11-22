
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '../Grid'

configure({ adapter: new Adapter() });

describe('Grid', () => {
    const defaultProps = {
        ceiling: 144,
        selected: 12,
        highlighted: [12,24,36,48,69,72,84,96,108,120,132,144],
        selectNumber: jest.fn()
    }
    let component;
    beforeEach(() => {
        component = shallow(<Grid {...defaultProps} />)
    })
    it('exists', () => {
        expect(component.exists()).toBeTruthy()
    });
    it('renders the correct number of boxes', () => {
        expect(component.find('.numberbox').length).toEqual(144)
    });
    it('renders the correct selected box', () => {
        expect(component.find('.selected').length).toEqual(1);
        expect(component.find('.selected').text()).toEqual("12");
    });
    it('renders the correct number of highlighted boxes', () => {
        expect(component.find('.highlighted').length).toEqual(12);
    });
    it('calls the selectNumber function on clicking a box', () => {
        component.find('.numberbox').at(31).props().onClick()
        expect(defaultProps.selectNumber).toHaveBeenCalledWith(32)
    });
})