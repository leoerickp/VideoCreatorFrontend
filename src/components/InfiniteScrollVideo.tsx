import { Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHandleListData } from "../hooks/useHandleListData";
import { ListVideo } from "./ListVideo";

export const InfiniteScrollVideo = () => {
  const { count, data, loading, loadMoreData } = useHandleListData();
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={loadMoreData}
      hasMore={data.length < count}
      loader={<Skeleton.Image active={true} />}
      style={{ padding: "0% 1%" }}
      endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
      scrollableTarget="scrollableDiv"
    >
      <ListVideo data={data} loading={loading} />
    </InfiniteScroll>
  );
};
