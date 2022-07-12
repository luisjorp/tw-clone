import * as React from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import TweetBox from "./TweetBox";
import TweetComponent from "./Tweet";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

export default function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);
  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");
    const tweetsRes = await fetchTweets();
    setTweets(tweetsRes);
    toast.success("Feed Updated! 😃", {
      id: refreshToast,
    });
  };
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="mr-5 mt-5 h-8
                w-8 cursor-pointer text-twitter transition-all duration-500 ease-out
                hover:rotate-180 active:scale-75"
          onClick={handleRefresh}
        />
      </div>

      <div>
        <TweetBox />
      </div>

      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
