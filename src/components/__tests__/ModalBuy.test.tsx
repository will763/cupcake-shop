import { fireEvent, render, screen, cleanup, waitFor, renderHook, act, within} from '@testing-library/react-native'
import ModalBuy from "components/ModalBuy"
import { useState } from 'react';
import TestRenderer, { ReactTestRenderer } from 'react-test-renderer';

jest.useFakeTimers();

const cancelMock = jest.fn(()=> Promise);

describe('ModalBuy', () => {
    afterEach(cleanup);

    it('ModalBuy should not be visible', ()=> {
      const {container} = render(<ModalBuy cancel={cancelMock} isVisible={false} />)
      
      
      expect(container.props.isVisible).toBeFalsy();
    })
    
    it('ModalBuy should render', ()=> {
      const {container} = render(<ModalBuy cancel={cancelMock} isVisible={true} />)

      expect(container.children.length).toEqual(1);
    })

    it('ModalBuy must cancel the purchase', async () => {
  
        render(<ModalBuy cancel={cancelMock} isVisible={true} />);
  
        fireEvent.press(screen.getByLabelText('payment-credit'));

        act(()=> {
          jest.runAllTimers();
        })
        
        expect(cancelMock).toBeCalled();

    })
})