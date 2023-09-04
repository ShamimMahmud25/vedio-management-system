import { useMutation } from "@apollo/client";
import { CREATE_VIDEO, ALL_VIDEO_DATA } from "@/graphql/video";
import { addVideoSuccess, addVideoFailed } from "@/slices/videoSlice";
import { useDispatch } from "react-redux";

export const useCreateVideo = () => {
  const dispatch = useDispatch();

  const [createVideo, { loading }] = useMutation(CREATE_VIDEO, {
    refetchQueries: [{ query: ALL_VIDEO_DATA }],
  });
  const handleCreate = (data) => {
    createVideo({
      variables: {
        createVideoInput: data,
      },
    })
      .then(() => {
        dispatch(addVideoSuccess());
      })
      .catch((error) => {
        dispatch(addVideoFailed("Something went wrong! Try again."));
      });
  };

  return {
    handleCreate,
    loading,
  };
};
