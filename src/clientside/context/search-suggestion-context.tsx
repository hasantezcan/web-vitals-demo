import {
    Context,
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";
import { API_URL } from "../../constants";
import { Suggestions } from "../interfaces/search-suggestions";

interface ISearchSuggestionContext {
    searchSuggestionList: Suggestions[];
    getSearchSuggestionData: () => void

}

const defaultSearchSuggestionContext: ISearchSuggestionContext = {
    searchSuggestionList: [],
    getSearchSuggestionData: () => null
};

interface SearchSuggestionContextProps {
    initialSearchSuggestions?: Suggestions[];
}

const SearchSuggestionContext: Context<ISearchSuggestionContext> = createContext(
    defaultSearchSuggestionContext
);

const useSearchSuggestion = () => useContext(SearchSuggestionContext);

const SearchSuggestionProvider = ({
    children,
    initialSearchSuggestions,
}: PropsWithChildren<SearchSuggestionContextProps>) => {
    const setInitialSearchSuggestionList = () =>
        initialSearchSuggestions && Array.isArray(initialSearchSuggestions) && initialSearchSuggestions.length
            ? initialSearchSuggestions
            : [];

    const [searchSuggestionList, setSearchSuggestionList] = useState<Suggestions[]>(
        setInitialSearchSuggestionList()
    );

    const getSearchSuggestionData = async () => {
        const response = await fetch(`${API_URL}/search-suggestion`);
        const searchSuggestionData = await response.json();
        if (searchSuggestionData && Array.isArray(searchSuggestionData) && searchSuggestionData.length) {
            setSearchSuggestionList(searchSuggestionData);
        }
    };

    return (
        <SearchSuggestionContext.Provider
            value={{
                searchSuggestionList,
                getSearchSuggestionData
            }}
        >
            {children}
        </SearchSuggestionContext.Provider>
    );
};

export { SearchSuggestionProvider, useSearchSuggestion };
