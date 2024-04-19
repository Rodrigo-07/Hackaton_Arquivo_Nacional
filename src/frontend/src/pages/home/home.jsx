import React from "react";
import ArchiveCard from "../../components/archive_card/archive_card";
import BottomBar from "../../components/bottom_bar/bottom_bar";
import Header from "../../components/header/header";
import Tabs from "../../components/tabs/tabs";


// página inicial do aplicativo
function HomePage(){
    return( 
        <main className="w-full bg-bage-bg">
            <Header/>
            <Tabs/>
            <section className="top-4 p-10 container mx-auto columns-2">
                <ArchiveCard/>
                <ArchiveCard/>
            </section>
            <footer className="fixed bottom-0">
                <BottomBar/>
            </footer>
        </main>
    )
};

export default HomePage;