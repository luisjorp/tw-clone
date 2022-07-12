import * as React from "react";
import { Tweet as TweetInterface, Comment } from "../typings";
import Image from "next/image";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../utils/fetchComments";
import { useEffect, useState } from "react";

interface Props {
  tweet: TweetInterface;
}

export default function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments = async () => {
    const commentsRes: Comment[] = await fetchComments(tweet._id);
    setComments(commentsRes);
  };

  // Only on first mount
  useEffect(() => {
    console.log("mount");
    refreshComments();
  }, []);

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        <div className="relative h-10 w-10">
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            className="rounded-full"
            src={tweet.profileImg}
          />
        </div>
        <div>
          <div className="flex items-center space-x-1 ">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="textsm hidden text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()}
            </p>
            <TimeAgo
              date={tweet._createdAt}
              className="text-sm text-gray-400"
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <div className="m-5 ml-0 mb-1 max-h-60 shadow-sm">
              <Image
                width="100%"
                height="100%"
                objectFit="cover"
                className="rounded-lg"
                src={tweet.image}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-twitter">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-twitter">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-twitter">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-twitter">
          <UploadIcon className="h-5 w-5 " />
        </div>
      </div>

      {/*Comment Box logic*/}
      {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments.map((comment) => (
            <div key={comment._id} className="relative flex space-x-2">
              <hr className="border-twitter-30 absolute left-6 top-10 h-8 border-x" />
              <div className="relative mt-2 h-8 w-8">
                <Image
                  src={comment.profileImg}
                  alt="profile image"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    {comment.username.replace(/\s+/g, "").toLowerCase()}
                  </p>
                  <TimeAgo
                    date={comment._createdAt}
                    className="text-sm text-gray-400"
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
