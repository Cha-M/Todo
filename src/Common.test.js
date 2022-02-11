import { render, screen, fireEvent } from '@testing-library/react';
import Common from './Common';


// You also need to test for the following
// • tasks submitted are displayed
// • submission button adds task (fireEvent)
// • deletion of an item removed the element so it is no longer displayed to the user


test('renders learn react link', () => {
  render(<Common />);
  // const linkElement = screen.getByText(/butt0n/i);//i for ignore casing

  // <DisplayItem title = "Title 1" checked = "Yes String"/>
  // <DisplayItem title = "Title 2" checked = "No, Str"/>
  // <DisplayItemMap title = "abcd"/>
  // <InputItem />
  // <ItemC title="title" />


  const linkButton = screen.getByRole("button");//i for ignore casing
  expect(linkButton).toBeInTheDocument();

  // const linkDisplayItem = screen.getByRole("DisplayItem");
  // expect(linkDisplayItem).toBeInTheDocument();
  // const linkDisplayItemMap = screen.getByRole("DisplayItemMap");
  // expect(linkDisplayItemMap).toBeInTheDocument();
  // const linkInputItem = screen.getByRole("InputItem");
  // expect(linkInputItem).toBeInTheDocument();
  // const ItemC = screen.getByRole("ItemC");
  // expect(ItemC).toBeInTheDocument();
  
  const para = screen.getByText("Input box");
  expect(para).toBeInTheDocument();



});

describe("Add Item button", () => {
  test("Add Item button is in the document", () => {
    render(<Common />);
    const button1 = screen.getByText("Add Item");
    fireEvent.click(button1);
    fireEvent.click(button1);
    // const deleteButton = screen.getByText(/delete/i);
    // expect(deleteButton).toBeInTheDocument();

    // expect(button1).toBeInTheDocument();
  })
});

describe("input element", () => {
  test("input element is in the document", () =>{
    render(<Common />)
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {target: {value: "Abcde123"}});
    expect(input.value).toBe("Abcde123");
    expect(input).toBeInTheDocument();
  })
})