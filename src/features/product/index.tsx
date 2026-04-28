"use client";

import { useState, useMemo, useDeferredValue } from "react";
import ProductCard from "./components/ProductCard";
import styles from "./Products.module.css";
import { Product } from "./types";

interface Props {
  initialProducts: Product[];
  categories: string[];
}

export default function Products({ initialProducts, categories }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const deferredSearch = useDeferredValue(searchTerm);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(deferredSearch.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialProducts, deferredSearch, selectedCategory]);

  const count = filteredProducts.length;
  const hasActiveFilters = searchTerm !== "" || selectedCategory !== "";

  function clearFilters() {
    setSearchTerm("");
    setSelectedCategory("");
  }

  return (
    <div className={styles.page}>
      <div className={styles.filtersWrapper}>
        <div className={styles.filters}>
          <label htmlFor="search" className="sr-only">
            Pesquisar produto
          </label>
          <input
            id="search"
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchBar}
          />
          <label htmlFor="category" className="sr-only">
            Filtrar por categoria
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.select}
          >
            <option value="">Todas as categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {hasActiveFilters && (
            <button onClick={clearFilters} className={styles.clearButton}>
              Limpar filtros
            </button>
          )}
        </div>
        <p className={styles.resultsCount}>
          {count} produto{count !== 1 ? "s" : ""} encontrado
          {count !== 1 ? "s" : ""}
        </p>
      </div>

      {count === 0 ? (
        <p className={styles.emptyState}>Nenhum produto encontrado</p>
      ) : (
        <div className={styles.container}>
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
