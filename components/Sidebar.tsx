import * as React from 'react';
import Image from 'next/image';
import SidebarRow from './SidebarRow';
import {BellIcon, BookmarkIcon, CollectionIcon, HashtagIcon, HomeIcon, MailIcon} from '@heroicons/react/outline';

export default function Sidebar() {
    return (<div className="flex flex-col col-span-2 items-center px-4 md:items-start">
        <div className="m-3 h-10 w-10 relative">
            <Image width="100%" height="100%" src="https://links.papareact.com/drq" alt="Twitter Logo"/>
        </div>
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>

    </div>);
};