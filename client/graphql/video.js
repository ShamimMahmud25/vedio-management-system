import { gql } from "@apollo/client";

export const ALL_VIDEO_DATA = gql`
  query Video {
    video {
      _id
      createdAt
      description
      title
      updatedAt
      url
      videoID
    }
  }
`;

export const CREATE_VIDEO = gql`
  mutation CreateVideo($createVideoInput: CreateVideoInput!) {
    createVideo(createVideoInput: $createVideoInput) {
      _id
      createdAt
      description
      title
      updatedAt
      url
      videoID
    }
  }
`;

export const FIND_VEDIO_BY_ID = gql`
  query FindOne($id: String!) {
    FindOne(_id: $id) {
      _id
      createdAt
      description
      title
      updatedAt
      url
      videoID
    }
  }
`;

export const DELETE_VEDIO_BY_ID = gql`
  mutation DeleteVideo($deleteVideoId: String!) {
    deleteVideo(id: $deleteVideoId) {
      _id
      createdAt
      description
      title
      updatedAt
      url
      videoID
    }
  }
`;

export const UPDATE_VIDEO_BY_ID = gql`
  mutation UpdateVideo($updateVideoInput: UpdateVideoInput!) {
    updateVideo(updateVideoInput: $updateVideoInput) {
      _id
      createdAt
      description
      title
      updatedAt
      url
      videoID
    }
  }
`;
