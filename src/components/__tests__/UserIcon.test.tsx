import { render, screen } from "@testing-library/react-native";
import UserIcon from 'components/UserIcon'

describe('UserIcon', () => {
    
    it('should be render', () => {
      const {container} =  render(<UserIcon />);

      expect(container.children.length).toEqual(1);
    })
})