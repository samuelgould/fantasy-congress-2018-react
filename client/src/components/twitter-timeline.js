import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Twitter(props) {
    return (
        <div className="twitter">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName={props.screenName}
            options={{
                height: 400,
                width: 400
            }}
            />
        </div>
    );
}

export default Twitter;
