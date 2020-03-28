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

    it('creates an input to deposit into or withdraw from the balance',() => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user type into the wallet input',() => {
        const userBalance = '25';
        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', { target: { value: userBalance }});
        });
        it('updates the local wallet balance in the state and coverts into number',() => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance,10));
        });
    });
});
