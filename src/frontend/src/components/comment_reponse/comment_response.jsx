import React from "react";

const ResponseCard = ({ response, handleResponseVote }) => {
    return (
        <div className="ml-4 mb-2">
            <div className="flex items-center mb-1">
                <span className="text-gray-600 mr-2">
                    User ID: {response.id_user}
                </span>
                <span className="text-gray-500">Upvotes: {response.upvotes}</span>
                <span className="text-gray-500">Downvotes: {response.downvotes}</span>
            </div>
            <p>{response.message}</p>
            <div className="flex justify-between">
                <button className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${response.hasUpvoted ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleResponseVote(response, true)} disabled={response.hasUpvoted}>
                    Upvote
                </button>
                <button className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ${response.hasDownvoted ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleResponseVote(response, false)} disabled={response.hasDownvoted}>
                    Downvote
                </button>
            </div>
        </div>
    );
};

export default ResponseCard;
