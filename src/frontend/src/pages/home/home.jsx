import React from "react";
import DocumentList from "../../components/document_list/DocumentList";

// página inicial do aplicativo
function HomePage(){
    return( 
        <main className="container mx-auto px-4 columns-2">
            <DocumentList />
        </main>
    )
};

export default HomePage;