import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import FeedbackButton from 'components/FeedbackButton'

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));

describe('FeedbackButton', ()=>{

    it('the component rendered', ()=> {
        const { container  } = render(<FeedbackButton />);
        
        fireEvent.press(screen.getByLabelText('feedback-button'))
        
        expect(container.children.length).toEqual(1);
        expect(mockedNavigate).toHaveBeenCalledTimes(1);

    })

})