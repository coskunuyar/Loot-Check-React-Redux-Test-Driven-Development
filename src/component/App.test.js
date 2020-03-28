import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import {shallow , configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('App',() => {
    const app = shallow(<App/>);
    it('renders properly',() => {
        expect(app).toMatchSnapshot();
    });

    it('contains a Wallet component',() => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });

    it('contains a Loot component',() => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });
});

