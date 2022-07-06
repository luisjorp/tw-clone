import * as React from 'react';
import {SearchIcon} from '@heroicons/react/outline';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

export default function Widgets() {
    return (<div className="mt-2 px-2 col-span-2 hidden lg:inline">
        {/*Search*/}
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-3">
            <SearchIcon className="w-5 h-5 text-gray-400"/>
            <input className="bg-transparent flex-1 outline-none"
                   type="text"
                   placeholder="Search Twitter"/>
        </div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="sonnysangha"
            options={{height: 1000}}
        />
    </div>);
};