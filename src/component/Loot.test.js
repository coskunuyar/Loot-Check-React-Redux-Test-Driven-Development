import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {Loot} from './Loot';
import {shallow , configure , mount} from 'enzyme';

configure({adapter: new Adapter()});

describe('Loot',() => {
    const mockFetchbitcoin = jest.fn();
    let props = {balance: 10 , bitcoin: {} , fetchBitcoin: mockFetchbitcoin}
    let loot = shallow(<Loot {...props}/>);

    it('render properly',() => {
        expect(loot).toMatchSnapshot();
    });

    describe('When mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props}/>)
        });

        it('dispatches the fetchbitcoin method it receives from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });
    });

    describe('when there are valid bitcoin props',() => {
        beforeEach(() => {
            props = { balance: 10 , bitcoin: { bpi: { USD: { rate: '1,000'}}} , fetchBitcoin: mockFetchbitcoin};
            loot = shallow(<Loot {...props} />)
        });

        it('displays the correct bitcoin value',() => {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        });
    });
});