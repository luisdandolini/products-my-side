"use client";

import { useState, useMemo, useDeferredValue } from "react";
import ProductCard from "./components/ProductCard";
import { Pagination } from "@/src/shared/components/Pagination";
import styles from "./Products.module.css";
import { Product } from "./types";

const ITEMS_PER_PAGE = 8;

interface Props {
  initialProducts: Product[];
  categories: string[];
}

export default function Products({ initialProducts, categories }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  const hasActiveFilters = searchTerm !== "" || selectedCategory !== "";

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  function clearFilters() {
    setSearchTerm("");
    setSelectedCategory("");
    setCurrentPage(1);
  }

  function handleFilterChange(fn: () => void) {
    fn();
    setCurrentPage(1);
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
            onChange={(e) =>
              handleFilterChange(() => setSearchTerm(e.target.value))
            }
            className={styles.searchBar}
          />
          <label htmlFor="category" className="sr-only">
            Filtrar por categoria
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) =>
              handleFilterChange(() => setSelectedCategory(e.target.value))
            }
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
          {paginatedProducts.map((item, index) => (
            <ProductCard key={item.id} product={item} priority={index < 4} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
