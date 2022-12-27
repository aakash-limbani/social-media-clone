import React from "react";
import { Story } from "./Story";
import "./storyReel.css";
export const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image={"story1.jpg"}
                ProfileSrc=""
                userName={'Aakash Limbani'}
                title="Bhargav Patel" />
            <Story
                image={"story2.jpg"}
                ProfileSrc=""
                userName={'Rohit Patel'}
                title="Aakash Limbani" />
            <Story
                image={"story3.jpg"}
                ProfileSrc=""
                userName={'Bohit Patel'}
                title="Swarnika Patel" />
            <Story
                image={"story4.jpg"}
                ProfileSrc=""
                title="Deepak Patel" />
            <Story
                image={"story5.jpg"}
                ProfileSrc=""
                userName={'Sohit Patel'}
                title="Tarun Patel" />
        </div>
    )
} 
