import { renderHook } from "@testing-library/react";
import { useHandleLikeState } from "../../src/hooks/useHandleLikeState";

describe("useHandleLikeState custom hook test", () => {
    test("like should be false", () => {
        const { result } = renderHook(() => useHandleLikeState(false, ''));
        expect(result.current.liked).toBe(false);
    });
    test("like should be true", () => {
        const { result } = renderHook(() => useHandleLikeState(true, ''));
        expect(result.current.liked).toBe(true);
    });
});