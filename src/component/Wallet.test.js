import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {Wallet} from './Wallet';
import {shallow , configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('Wallet',() => {
    const props = { balance: 20 };
    const wallet = shallow(<Wallet {...props}/>);
    it('renders properly',() => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance form props',() => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20')
    });
});
