import React, { useState } from "react";
import ResponseCard from "../comment_reponse/comment_response";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUpLong } from "@fortawesome/free-solid-svg-icons";

export default function CommentCard({ comment }) {
    const {
        id_user,
        title,
        justify,
        date,
        upvotes_normal,
        downvote,
    } = comment;

    // State for main comment upvotes and downvotes
    const [upvotes, setUpvotes] = useState(upvotes_normal);
    const [downvotes, setDownvotes] = useState(downvote);
    const [hasUpvoted, setHasUpvoted] = useState(false);
    const [hasDownvoted, setHasDownvoted] = useState(false);

    // Function to handle upvoting
    const handleUpvote = () => {
        if (!hasUpvoted) {
            setUpvotes(upvotes + 1);
            setHasUpvoted(true);
            if (hasDownvoted) {
                setDownvotes(downvotes - 1);
                setHasDownvoted(false);
            }
        }
    };

    // Function to handle downvoting
    const handleDownvote = () => {
        if (!hasDownvoted) {
            setDownvotes(downvotes + 1);
            setHasDownvoted(true);
            if (hasUpvoted) {
                setUpvotes(upvotes - 1);
                setHasUpvoted(false);
            }
        }
    };
    return (
        <div className="bg-white shadow-md rounded-md p-4 my-4">
            <div className="flex items-center mb-2">
                <span className="text-gray-600 mr-2">User ID: {id_user}</span>
                <span className="text-gray-500">Date: {date}</span>
            </div>

            <div className="flex flex-row items-center mb-2"><h2 className="text-lg font-semibold ">Título:</h2><h6 className="ml-1">{title}</h6></div>
            <div className="flex flex-row items-start mb-2"><h2 className="text-base font-semibold ">Justificativa:</h2><h6 className="text-base ml-1">{justify}</h6></div>
            <div className="flex justify-between mb-4">
                <div className="text-base text-gray-600">
                    Upvotes: {upvotes}
                </div>
                <div className="text-base text-gray-600">
                    Downvotes: {downvotes}
                </div>
            </div>
            <div className="flex justify-between">
                <button className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${hasUpvoted ? 'opacity-50 cursor-not-allowed' : ''} rounded-full`} onClick={handleUpvote} disabled={hasUpvoted}>
                    <FontAwesomeIcon icon={faUpLong} />
                </button>
                <button className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ${hasDownvoted ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleDownvote} disabled={hasDownvoted}>
                    Downvote
                </button>
            </div>
        </div>
    );
};