import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {
  // console.log("ListingsContainer", listings)
  const listingComponents = listings.map(list =>
    <ListingCard
      key={list.id}
      listing={list}
      removeListing={removeListing}
    />
  )

  return (
    <main>
      <ul className="cards">
        {listingComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
