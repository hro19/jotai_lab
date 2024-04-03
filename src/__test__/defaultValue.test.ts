import { culculateAddTax } from "../features/defaultValue";

describe("culculateAddTaxの単体テスト", () => {
  it("should calculate the sum with tax", () => {
    const result = culculateAddTax({ sum: 100, tax: 0.3 });
    expect(result).toBe(130);
  });

  it("should calculate the sum without tax", () => {
    const result = culculateAddTax({ sum: 100 });
    expect(result).toBe(110);
  });
});
