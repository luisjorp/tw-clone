import * as React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

export default function TweetBox() {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const imageInputRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false);

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!imageInputRef.current?.value) return;
    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageUrlBoxIsOpen(false);
  };
  return (
    <div className="flex space-x-2 p-5">
      <div className="relative mt-4 h-14 w-14">
        <Image
          width="100%"
          height="100%"
          objectFit="cover"
          className="rounded-full"
          src={session?.user?.image || "https://links.papareact.com/gll"}
        />
      </div>
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
              disabled={!input || !session}
            >
              Tweet
            </button>
          </div>
          {imageUrlBoxIsOpen && (
            <form
              action=""
              className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4 "
            >
              <input
                ref={imageInputRef}
                type="text"
                placeholder="Enter Image URL..."
                className="flex-1 bg-transparent text-white outline-none placeholder:text-white"
              />
              <button
                className="font-bold text-white"
                type="submit"
                onClick={addImageToTweet}
              >
                Add Image
              </button>
            </form>
          )}
          {image && (
              <div className="relative mt-10 h-40 w-full rounded-xl shadow-lg">
                <Image src={image} width="100%" height="100%" objectFit="contain" />
              </div>
          )}
        </form>
      </div>
    </div>
  );
}
