import { renderHook } from "@testing-library/react";
import { useHandlerVideoData } from '../../src/hooks/useHandlerVideoData';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));
describe("useHandlerVideoData custom hook test", () => {
    test("like should be false", () => {
        const { result } = renderHook(() => useHandlerVideoData());
        expect(result.current.count).toBe(0);
        expect(result.current.loading).toBe(false);
        expect(result.current.setCount).toBeTruthy();
    });

});


