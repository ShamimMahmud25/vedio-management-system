import { useMutation } from "@apollo/client";
import { UPDATE_VIDEO_BY_ID, ALL_VIDEO_DATA } from "@/graphql/video";
import { useDispatch } from "react-redux";
import { updateVideoSuccess, updateVideoFailed } from "@/slices/videoSlice";

export const useUpdateVideoById = () => {
  const dispatch = useDispatch();

  const [updateVideoById, { loading }] = useMutation(UPDATE_VIDEO_BY_ID, {
    refetchQueries: [{ query: ALL_VIDEO_DATA }],
  });
  const handleUpdate = (data) => {
    updateVideoById({
      variables: {
        updateVideoInput: data,
      },
    })
      .then(() => {
        dispatch(updateVideoSuccess());
      })
      .catch((error) => {
        dispatch(updateVideoFailed("Something went wrong! Please try again."));
      });
  };

  return {
    handleUpdate,
    loading,
  };
};
