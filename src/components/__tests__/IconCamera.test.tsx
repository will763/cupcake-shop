import { render, screen } from "@testing-library/react-native";
import IconCamera from 'components/IconCamera'

describe('IconCamera', () => {
    
    it('should be render', () => {
      const {container} =  render(<IconCamera />);

      expect(container.children.length).toEqual(1);
    })
})