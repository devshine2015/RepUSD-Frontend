import React, { useState } from 'react';

import SearchSmartComponent from 'components/SearchSmartComponent';
import DashboardComponent from 'components/DashboardComponent';

const SearchSmartContainer = () => {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    
    return (
        <>
            {!isSearchClicked ? <SearchSmartComponent changePage={setIsSearchClicked} /> : <DashboardComponent />}
        </>
    );
}

export default SearchSmartContainer;