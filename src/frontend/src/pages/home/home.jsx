import React from "react";
import ArchiveCard from "../../components/archive_card/archive_card";
import BottomBar from "../../components/bottom_bar/bottom_bar";

// página inicial do aplicativo
function HomePage(){
    return( 
        <main className="container mx-auto bg-bage-bg">
            <header className="">

            </header>
            <section className=" container mx-auto columns-2">
                <ArchiveCard/>
                <ArchiveCard/>
            </section>
            <footer>
                <BottomBar/>
            </footer>
        </main>
    )
};

export default HomePage;