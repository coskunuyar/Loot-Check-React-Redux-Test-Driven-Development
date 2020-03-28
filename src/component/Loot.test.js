import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {Loot} from './Loot';
import {shallow , configure , mount} from 'enzyme';

configure({adapter: new Adapter()});

describe('Loot',() => {
    const mockFetchbitcoin = jest.fn();
    const props = {balance: 10 , bitcoin: {} , fetchBitcoin: mockFetchbitcoin}
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
});