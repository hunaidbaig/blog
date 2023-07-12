import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import SearchHotel from "./SearchHotel";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";

beforeAll(()=>{
    global.matchMedia = global.matchMedia || function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
})

test('test', ()=>{
    render(
        <MemoryRouter>
            <SearchHotel />
        </MemoryRouter>
        )

    const test = screen.getByText('Exotourista');

    expect(test).toBeInTheDocument()
})

test('test select', async ()=>{
    render(
        <MemoryRouter>
            <SearchHotel />
        </MemoryRouter>
        )

    const submitButton = screen.getByText('Search');
    fireEvent.submit(submitButton);

    expect(screen.getByTestId('city')).toBeInTheDocument();
    expect(screen.getByTestId('exp')).toBeInTheDocument();
   
})

test('test select', async ()=>{
    render(
        <MemoryRouter>
            <SearchHotel />
        </MemoryRouter>
        )

    const element = screen.getByRole('combobox', { name: 'cities' });
    const city = screen.getByText('Karachi');

    console.log(element.childNodes)
    expect(element.childNodes.length).toBe(0);
    expect(city).toBeInTheDocument();

   
})