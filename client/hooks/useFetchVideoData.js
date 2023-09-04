import { useQuery } from "@apollo/client";
import { ALL_VIDEO_DATA } from "../graphql/video";

export const useFetchVideoData = () => {
  const { data, error, loading } = useQuery(ALL_VIDEO_DATA);

  return { data, error, loading };
};
