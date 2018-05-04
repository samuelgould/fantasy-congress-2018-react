import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function TwitterTimeline(props) {
    return (
        <div className="twitter">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName={props.twitterHandle}
            options={{
                height: 800,
                width: 1000
            }}
            />
        </div>
    );
}
