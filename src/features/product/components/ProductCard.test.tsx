import { describe, it, expect, vi } from "vitest";
import { ProductCard } from "./ProductCard";
import { render, screen } from "@testing-library/react";

const mockProduct = {
  id: "1",
  title: "ProductTest",
  price: 2000,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: {
    src: "https://placehold.co/400x300?text=product-test",
    alt: "ProductTest",
  },
  category: "Móviles",
};

describe("ProductCard", () => {
  //// Scenario: Find the product title on the screen
  it("should render properly the title of the product", () => {
    render(<ProductCard product={mockProduct} onClick={vi.fn()} />);
    expect(screen.getByText("ProductTest")).toBeInTheDocument();
  });
});
