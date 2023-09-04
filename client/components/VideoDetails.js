import React, { useState, useEffect } from "react";
import EditVideo from "./EditVideo";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetDeleteVideoState } from "@/slices/videoSlice";
import SucessComponent from "./SucessComponent";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import { useDeleteVideoById } from "@/hooks/useDeleteVideoById";

export default function VideoDetails() {
  const { handleDelete, loading } = useDeleteVideoById();
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.videos);
  const { title, description, url } = videoData.selected;
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(true);
  const router = useRouter();
  const handleEditClick = () => {
    setShowEdit(true);
  };
  const handleDeleteClick = () => {
    setShowDelete(false);
    handleDelete(videoData.selected._id);
  };
  const handleCancel = () => {
    router.push({
      pathname: "/videos/list",
    });
  };
  useEffect(() => {
    if (!videoData.selected.url) {
      router.push({
        pathname: "/videos/list",
      });
    }
    return () => {
      dispatch(resetDeleteVideoState());
    };
  }, []);
  console.log("loading", loading);
  return (
    <div className="bg-amber-50 h-screen">
      {!showEdit && showDelete && (
        <div>
          <div>
            <p className="page-title">Video Details</p>
          </div>
          <div className="details-container">
            <div className="details-card">
              <video controls className="mydetailsvideo">
                <source src={url} type="video/mp4" />
              </video>
              <div className="mycontainer">
                <h4 className="font-semibold text-2xl text-blue-400">
                  {title}
                </h4>
                <p className="italic">
                  {description.length <= 320
                    ? description
                    : `${description.substring(0, 330)}...`}
                </p>
                <div className="flex justify-center items-center m-3">
                  <div className="flex justify-start items-start w-full space-x-20">
                    <Button
                      onClick={handleEditClick}
                      className=" w-1/2 btn"
                      variant="contained"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={handleDeleteClick}
                      className="w-1/2  btn"
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!showEdit && !showDelete && (
        <>
          {loading && <LoadingComponent message="Deleting....." />}
          {!loading && videoData.deleteVideoError && (
            <ErrorComponent
              message={videoData.deleteVideoError}
              onBtnClicked={handleCancel}
              buttonText="Okay"
            />
          )}
          {!loading && videoData.deleteVideoSuccess && (
            <SucessComponent
              message="Deleted sucessfully"
              onBtnClicked={handleCancel}
              buttonText="Okay"
            />
          )}
        </>
      )}
      {showEdit && (
        <EditVideo
          title={videoData.selected.title}
          description={videoData.selected.description}
          url={videoData.selected.url}
          handleCancel={handleCancel}
          video={videoData.selected}
        />
      )}
    </div>
  );
}
