import React from 'react'
import { render, screen } from '@testing-library/react-native'

import Comment from 'components/Comment'

describe('Comment', ()=>{
    it('the component rendered with a prop', ()=> {
        const { container } = render(<Comment text='testando' />);
        const element = screen.getByLabelText('comment-text');
        
        expect(container.children.length).toEqual(1);
        expect(element.type).toEqual('Text')
        expect(element.children[0]).toEqual('testando')
        
    })

})