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
}

const defaultSearchSuggestionContext: ISearchSuggestionContext = {
    searchSuggestionList: [],
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
        const response = await fetch(`${API_URL}/search-suggestions`);
        const searchSuggestionData = await response.json();
        if (searchSuggestionData && Array.isArray(searchSuggestionData) && searchSuggestionData.length) {
            setSearchSuggestionList(searchSuggestionData);
        }
    };

    useEffect(() => {
        if (!searchSuggestionList?.length) getSearchSuggestionData();
    }, []);

    return (
        <SearchSuggestionContext.Provider
            value={{
                searchSuggestionList,
            }}
        >
            {children}
        </SearchSuggestionContext.Provider>
    );
};

export { SearchSuggestionProvider, useSearchSuggestion };
