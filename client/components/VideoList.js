import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useFetchVideoData } from "@/hooks/useFetchVideoData";
import { addVideoList } from "@/slices/videoSlice";

export default function VideoList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, loading, error } = useFetchVideoData();
  useEffect(() => {
    if (data) {
      dispatch(addVideoList(data.video));
    }
  }, [data, dispatch]);
  const handleAddClick = () => {
    router.push({
      pathname: "/videos/add",
    });
  };

  return (
    <div className="p-5 h-screen">
      <Grid container>
        <Grid item xs={6}>
          <p className="text-left ml-10 text-4xl">List of videos</p>
        </Grid>
        <Grid item xs={6} className="flex justify-end">
          <Button
            variant="contained"
            className="add-button btn"
            onClick={handleAddClick}
          >
            Add Video
          </Button>
        </Grid>
      </Grid>
      {!loading && !error && data && data.video.length > 0 && (
        <div className="video-list-container">
          {data.video.map((video) => {
            return <VideoCard video={video} key={video.videoID} />;
          })}
        </div>
      )}
      {!loading && !error && data && data.video.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl text-red-600">
            No Video Found!! Please add video
          </p>
        </div>
      )}
      {!loading && error && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl text-red-600">
            Error in loading video!! Please try again
          </p>
        </div>
      )}
    </div>
  );
}
