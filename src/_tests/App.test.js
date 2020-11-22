
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App'
import Grid from "../Grid";

configure({ adapter: new Adapter() });

describe('App', () => {

    let component;
    beforeEach(() => {
        component = shallow(<App />)
    })
    it('exists', () => {
        expect(component.exists()).toBeTruthy()
    });
    it('sets the selected box', () => {
        component.find(Grid).props().selectNumber(12);
        expect(component.find(Grid).props().selected).toEqual(12)
    })
})