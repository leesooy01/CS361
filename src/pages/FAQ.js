import React from 'react';

function FAQ() {
    return (
        <>
            <h2>FAQ</h2>
        <article id = "description">
            <h3> How does this website work?</h3>
            <p> This website uses CSS, HTML, React, and Javascript in order to run!
            </p>
            <h3> How does the Gallery Page Work?</h3>
            <p>Using the react feature "react-image-gallery", we are able to create a gallery in which the buttons are easy and 
                big enough to use</p>
                <h3> How does the Order Page Work?</h3>
            <p>The order page involves making two seperate JavaScript functions called ProductQuantity and ProductRow, which will export and import
                data using react, allowing the user to have a seamless experience. 
                 </p>

        </article>
         </>
    );
}

export default FAQ;