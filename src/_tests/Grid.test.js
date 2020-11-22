
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '../Grid'

configure({ adapter: new Adapter() });

describe('Grid', () => {
    const defaultProps = {
        ceiling: 144
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
    })
})