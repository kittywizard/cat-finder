import react from "react";
import { render } from "@testing-library/react";
import {Routes, Route, BrowserRouter} from "react-router-dom";


import App from "../App";

describe("app rendering", () => {
    test('renders app component', () => {
        render(<App/>, {wrapper: BrowserRouter});
    })
})