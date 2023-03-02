import React from "react";
import { renderHook } from "@testing-library/react";
import { useHandleListData } from "../../src/hooks/useHandleListData";
import { VideoDataProvider } from "../../src/contexts/videosdata/VideoDataProvider";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));
describe("useHandleListData custom hook test", () => {
  test("count should be 0 and loading should be false", () => {
    const wrapper = ({ children }) => (
      <VideoDataProvider> {children} </VideoDataProvider>
    );
    const { result } = renderHook(() => useHandleListData(), { wrapper });
    expect(result.current.count).toBe(0);
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeTruthy();
    expect(result.current.loadMoreData).toBeTruthy();
  });
});

useHandleListData;
