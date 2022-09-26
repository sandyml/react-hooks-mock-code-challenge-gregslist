import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

// When the app starts, I can see all listings. (done.)
// I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence. (done.)
// I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend. (done.)
// I can search for listings by their name/description from db.json. (done.)

const baseURL = "http://localhost:6001/listings";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")

  // fetch, useEffect give two arguments 
  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(setListings)
  }, [])
  // console.log(listings)

  // clickedSubmit function 
  function clickedSubmit(searching) {
    console.log("Invoked from App component, but fired in Search component")
    setSearch(searching)
  }

  // remove listing function 
  function removeListing(listing) {
    // console.log("App.js remove", listing);
    const newListings = listings.filter(listObj => listObj.id !== listing.id)
    setListings(newListings)
    fetch(baseURL + `/${listing.id}`, {
      method: "DELETE"
    })
  }

  const searchLists = listings.filter(listObj => {
    return listObj.description.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <div className="app">
      <Header clickedSubmit={clickedSubmit} />
      <ListingsContainer listings={searchLists} removeListing={removeListing} />
    </div>
  );
}

export default App;
