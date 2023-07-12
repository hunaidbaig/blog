import { render, screen } from "@testing-library/react"
import Sample from "./sample";
import '@testing-library/jest-dom';



test('test', ()=>{
    render(<Sample />)

    const test = screen.getByText('hello');

    expect(test).toBeInTheDocument()
})