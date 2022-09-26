import React, { useState } from "react";

// I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
// I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.


function ListingCard({ listing, removeListing }) {
  const [favorite, setFavorite] = useState(false)
  // const [trash, setTrash] = useState(false)

  // need toggle button for like to be unliked / "favorite" and "unfavorite"
  function toggleLiked() {
    setFavorite(!favorite)
  }
  // need toggle button for traash / delete
  function toggleTrash() {
    // console.log('Go To Trash', listing)
    removeListing(listing)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={toggleLiked}
            className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleLiked}
            className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.id}: {listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={toggleTrash}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
