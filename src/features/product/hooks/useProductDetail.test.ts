import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useProductDetail } from "./useProductDetail";

describe("useProductDetail", () => {
  // Scenario: Handling found product
  it("Find a product by existing ID", async () => {
    const { result } = renderHook(() => useProductDetail("1"));
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.productDetail.id).toBe("1");
  });

  // Scenario: Handling of product not found
  it("returns null with a non-existent ID (999)", async () => {
    const { result } = renderHook(() => useProductDetail("999"));
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.productDetail).toBeNull();
  });
});
