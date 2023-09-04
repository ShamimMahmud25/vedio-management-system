import { useQuery } from "@apollo/client";
import { FIND_VEDIO_BY_ID } from "../graphql/video";
import { useState } from "react";
export const useFetchVedioById = () => {
  const [id, setId] = useState();
  const { data: video } = useQuery(FIND_VEDIO_BY_ID, {
    variables: {
      id: id,
    },
  });

  return {
    video,
    setId,
  };
};
