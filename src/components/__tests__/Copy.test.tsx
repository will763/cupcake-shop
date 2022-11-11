import React from 'react'
import { render } from '@testing-library/react-native'

import Copy from '../Copy'

describe('Copy', ()=>{

    it('the component rendered', ()=> {
        const { debug } = render(<Copy />);
        debug();
    })

})