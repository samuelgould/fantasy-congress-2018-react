import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function TwitterTimeline(props) {
    return (
        <div className="twitter">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName={props.screenName}
            options={{
                height: 600
            }}
            />
        </div>
    );
}
