import { formatToBRL } from "./formatCurrency";

describe("formatToBRL()", () => {
  it("deve formatar um número positivo corretamente para Real (BRL)", () => {
    const result = formatToBRL(1500.5);

    expect(result).toMatch(/R\$\s?1\.500,50/);
  });

  it("deve formatar um valor zero corretamente", () => {
    const result = formatToBRL(0);
    expect(result).toMatch(/R\$\s?0,00/);
  });

  it("deve formatar valores negativos corretamente", () => {
    const result = formatToBRL(-50);

    expect(result).toContain("-R$");
    expect(result).toContain("50,00");
  });
});
