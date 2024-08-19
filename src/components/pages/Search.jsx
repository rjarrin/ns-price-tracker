import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GameList from "../GameList";
import Header from "../Header";

const Search = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const searchTerm = searchParams.get("term");
    const decodedSearchTerm = searchTerm? decodeURIComponent(searchTerm) : '';

    const goBack = () => navigate('/');

    return (
        <div>
            <Header />
            <h1>Search results for {decodedSearchTerm}</h1>
            <GameList key={decodedSearchTerm} searchTerm={decodedSearchTerm} filterType={null} />
            <button className="back-btn" onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Search;