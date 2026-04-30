import { render, screen } from "@testing-library/react";
import ProductCard from "./index";

jest.mock("@/src/shared/hooks/useCart", () => ({
  useCart: () => ({
    addToCart: jest.fn(),
  }),
}));

const mockProduct = {
  id: 1,
  title: "Camiseta Básica",
  price: 99.9,
  description: "Uma camiseta muito confortável",
  category: "clothing",
  image: "https://fakestoreapi.com/img/test.jpg",
};

describe("ProductCard", () => {
  it("renderiza o título do produto", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Camiseta Básica")).toBeInTheDocument();
  });

  it("renderiza o preço formatado em BRL", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(/R\$\s?99,90/)).toBeInTheDocument();
  });

  it("renderiza a categoria do produto", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("clothing")).toBeInTheDocument();
  });

  it("o link 'Ver produto' aponta para a página do produto", () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole("link", { name: /ver produto/i });
    expect(link).toHaveAttribute("href", "/products/1");
  });
});
