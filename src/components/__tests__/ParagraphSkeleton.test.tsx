import { render, screen } from "@testing-library/react-native";
import ParagraphSkeleton from "components/ParagraphSkeleton";

describe('ParagraphSkeleton', () => {
    
    it('should be render', () => {
      const {container} =  render(<ParagraphSkeleton />);

      expect(container.children.length).toEqual(1);
    })

    it('should render the five paragraphs', () => {
      render(<ParagraphSkeleton />);
      const children = screen.getByLabelText("parent-skeleton").children.length;
      

      expect(children).toEqual(5);
    })
})