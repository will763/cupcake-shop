import { render, screen } from "@testing-library/react-native";
import IconCalendar from 'components/IconCalendar'

describe('IconCalendar', () => {
    
    it('should be render', () => {
      const {container} =  render(<IconCalendar />);

      expect(container.children.length).toEqual(1);
    })
})