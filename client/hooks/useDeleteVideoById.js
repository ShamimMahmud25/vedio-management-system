import { useMutation } from "@apollo/client";
import { DELETE_VEDIO_BY_ID, ALL_VIDEO_DATA } from "@/graphql/video";
import { useDispatch } from "react-redux";
import { deleteVideoSuccess, deleteVideoFailed } from "@/slices/videoSlice";

export const useDeleteVideoById = () => {
  const dispatch = useDispatch();
  const [deleteVideoById, { loading }] = useMutation(DELETE_VEDIO_BY_ID, {
    refetchQueries: [{ query: ALL_VIDEO_DATA }],
  });
  const handleDelete = (id) => {
    deleteVideoById({
      variables: {
        deleteVideoId: id,
      },
    })
      .then(() => {
        dispatch(deleteVideoSuccess());
      })
      .catch((error) => {
        dispatch(deleteVideoFailed("Something went wrong! Please try again."));
      });
  };

  return {
    handleDelete,
    loading,
  };
};
