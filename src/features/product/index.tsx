"use client";

import { useState, useMemo, useDeferredValue } from "react";
import ProductCard from "./components/ProductCard";
import { Pagination } from "@/src/shared/components/Pagination";
import styles from "./Products.module.css";
import { Product } from "./types";
import Input from "@/src/shared/components/Input";
import Select from "@/src/shared/components/Select";
import Button from "@/src/shared/components/Button";

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
          <Input
            id="search"
            label="Pesquisar produto"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) =>
              handleFilterChange(() => setSearchTerm(e.target.value))
            }
            className={styles.searchBar}
          />

          <Select
            id="category"
            label="Filtrar por categoria"
            item="Todas as categorias"
            value={selectedCategory}
            onChange={(e) =>
              handleFilterChange(() => setSelectedCategory(e.target.value))
            }
            className={styles.select}
            options={categories}
          />

          {hasActiveFilters && (
            <Button onClick={clearFilters} className={styles.clearButton}>
              Limpar filtros
            </Button>
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
