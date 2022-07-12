import * as React from "react";
import Image from "next/image";
import SidebarRow from "./SidebarRow";
import {
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/outline";
import {useSession, signIn, signOut} from 'next-auth/react';

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <div className="relative m-3 h-10 w-10">
        <Image
          width="100%"
          height="100%"
          src="https://links.papareact.com/drq"
          alt="Twitter Logo"
        />
      </div>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} onClick={session ? signOut : signIn} title={session ? 'Sign Out' : 'Sign' +
          ' In'} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}
