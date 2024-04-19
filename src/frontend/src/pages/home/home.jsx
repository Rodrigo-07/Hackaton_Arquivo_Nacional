import React from "react";
import ArchiveCard from "../../components/archive_card/archive_card";
import BottomBar from "../../components/bottom_bar/bottom_bar";
import Header from "../../components/header/header";
import Tabs from "../../components/tabs/tabs";
import TaggingPage from "../../components/page_add_tag/page_add_tag";

const HomePage = () => {
    return( 
        <main className="w-full bg-bage-bg">
            <Tabs tabs = {["Classificação", "Descrição"]}/>
        </main>
    )
};

export default HomePage;