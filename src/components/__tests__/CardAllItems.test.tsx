import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'

import CardAllItems from '../CardAllItems'

describe('CardAllItems', ()=>{

    const mocks = {
        id: 1,
        url: 'https://callstack.github.io/react-native-testing-library/img/owl.png'
    }

    it('the component rendered', ()=> {
        const { container } = render(<CardAllItems id={mocks.id} url={mocks.url} />);
        const element = screen.getByLabelText('card-wrapper');
        
        expect(container.children.length).toEqual(1);
        expect(element.type).toEqual('View');
    })

})