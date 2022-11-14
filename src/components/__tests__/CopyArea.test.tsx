import React from 'react'
import { fireEvent, render, act } from '@testing-library/react-native'

import CopyArea from 'components/CopyArea';

const mocked = jest.fn();

jest.mock('expo-clipboard', () => {
  return {
    setStringAsync: mocked
  }
})

jest.mock('@react-navigation/native', () => {
        return {
            useFocusEffect: jest.fn()
        }
    })

jest.useFakeTimers();

describe('CopyArea', ()=>{
    it('the component rendered', ()=> {
        const { container  } = render(<CopyArea text='12345678' type='number' />);

        expect(container.children.length).toEqual(1);  
    })

    it('the component rendered if not copied', async ()=> {
        const { container, getByLabelText  } = render(<CopyArea text='12345678' type='number' />);
        fireEvent.press(getByLabelText('container-parent')) ;

        act(()=> {
          jest.runAllTimers();
        })
        
        expect(container.children.length).toEqual(1);
    })

})