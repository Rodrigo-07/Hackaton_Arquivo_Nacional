import React, { useState } from "react";
import ResponseCard from "../comment_reponse/comment_response";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUpLong } from "@fortawesome/free-solid-svg-icons";

export default function CommentCard(comment){
    const comments = {
        "comments": [
            {
                "id": 1,
                "id_user": 9,
                "title": "adasdasda",
                "date": 209189,
                "upvotes_normal": 10,
                "upvotes_revisor": 2,
                "downvote": 4,
                "responses": [
                    {
                        "id_user": 4,
                        "message": "ah, a data ta errada",
                        "upvotes_normal": 9,
                        "upvotes_revisor": 1,
                        "downvote": 2,
                    },
                    {
                        "id_user": 2,
                        "message": "Adorei a resposta",
                        "upvotes_normal": 2,
                        "upvotes_revisor":3,
                        "downvote": 12,
                    },
                ]
            }
        ]
    };
    const firstComment = comments.comments[0];
    // State for main comment upvotes and downvotes
    const [upvotes, setUpvotes] = useState(firstComment.upvotes_normal);
    const [downvotes, setDownvotes] = useState(firstComment.downvote);
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
    // Function to handle upvoting and downvoting of responses
    const handleResponseVote = (responseIndex, isUpvote) => {
        const updatedResponses = [...firstComment.responses];
        const updatedResponse = { ...updatedResponses[responseIndex] };
        if (!updatedResponse.hasUpvoted && !updatedResponse.hasDownvoted) {
            if (isUpvote) {
                updatedResponse.upvotes_normal += 1;
                updatedResponse.hasUpvoted = true;
                if (updatedResponse.hasDownvoted) {
                    updatedResponse.downvote -= 1;
                    setHasDownvoted(false);
                }
            } else {
                updatedResponse.downvote += 1;
                updatedResponse.hasDownvoted = true;
                if (updatedResponse.hasUpvoted) {
                    updatedResponse.upvotes_normal -= 1;
                    setHasUpvoted(false);
                }
            }
        }
        const updatedComments = [...comments.comments];
        updatedComments[0].responses[responseIndex] = updatedResponse;
        // Update state for responses
        // setComments({ comments: updatedComments }); // Remove this line
    };
    return (
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <div className="flex items-center mb-2">
                <span className="text-gray-600 mr-2">User ID: {firstComment.id_user}</span>
                <span className="text-gray-500">Date: {firstComment.date}</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{firstComment.title}</h2>
            <div className="flex justify-between mb-4">
                <div className="text-gray-600">
                    Upvotes (Normal): {upvotes}
                </div>
                <div className="text-gray-600">
                    Downvotes: {downvotes}
                </div>
            </div>
            <div className="flex justify-between">
                <button  className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${hasUpvoted ? 'opacity-50 cursor-not-allowed' : ''} rounded-full`} onClick={handleUpvote} disabled={hasUpvoted}>
                <FontAwesomeIcon icon={faUpLong}/>
                </button>
                <button className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ${hasDownvoted ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleDownvote} disabled={hasDownvoted}>
                    Downvote
                </button>
            </div>
        </div>
    );
};