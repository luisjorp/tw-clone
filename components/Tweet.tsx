import * as React from "react";
import { Tweet as TweetInterface } from "../typings";
import Image from "next/image";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";

interface Props {
  tweet: TweetInterface;
}

export default function Tweet({ tweet }: Props) {
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
          <p>5</p>
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
    </div>
  );
}
