import { useSearchSuggestion } from "../../context/search-suggestion-context";
import { useState } from "react";
import { ICONS } from "../../icons/icons";


const Search = () => {
    const { searchSuggestionList, getSearchSuggestionData } = useSearchSuggestion();
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

    const handleSearchFocus = () => {
        getSearchSuggestionData();
        setShowSearchSuggestions(true);
    };

    const handleSearchBlur = () => {
        setShowSearchSuggestions(false);
    };
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Type the product, category or brand you are looking"
                onChange={handleSearchFocus}
                onBlur={handleSearchBlur}
            />
            <span>
                <img
                    className="search-icon"
                    src={ICONS.SEARCH_ICON}
                />
            </span>

            {showSearchSuggestions && (
                <div className="search-suggestions">
                    <div className="search-suggestion">
                        {
                            searchSuggestionList && Array.isArray(searchSuggestionList) && searchSuggestionList.length ? searchSuggestionList.map(suggestion => {
                                return <div className="search-suggestion-item" >{suggestion.name}</div>
                            }) : null
                        }
                    </div>
                </div>
            )}
        </div>
    )
};

export { Search };
