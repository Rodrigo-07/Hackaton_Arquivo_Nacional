import React from "react";
import ArchiveCard from "../../components/archive_card/archive_card";
import BottomBar from "../../components/bottom_bar/bottom_bar";
import Tabs from "../../components/tabs/tabs";

// página inicial do aplicativo
function HomePage(){
    return( 
        <main className="container mx-auto bg-bage-bg">
            <header className="">

            </header>
            <Tabs/>
            <ArchiveCard/>
            
            <ArchiveCard/>
            
            <ArchiveCard/>
            
            <ArchiveCard/>
            
            <footer>
                <BottomBar/>
            </footer>
        </main>
    )
};

export default HomePage;