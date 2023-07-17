import React from 'react';

import ImageGallery from 'react-image-gallery'

const images = [
    {
        original: 'images/mango.png',
        thumbnail: 'images/mango.png',
        description: "Picture of the Mango Yogurt",
        originalHeight: '450px',
    },

    {
        original: 'images/peach.png',
        thumbnail: 'images/peach.png',
        description: "Picture of the Peach Yogurt",
        originalHeight: '450px',
    },
    {
        original: 'images/banana.png',
        thumbnail: 'images/banana.png',
        description: "Picture of the Banana Yogurt",
        originalHeight: '450px',
    },
    {
        original: 'images/strawberry.png',
        thumbnail: 'images/strawberry.png',
        description: "Picture of the Strawberry Yogurt",
        originalHeight: '450px',
    }

]


function GalleryPage() {
    return (
        <>
            <h2> Products for Sale</h2>
            <p>These are the yogurts for sale, please click the left and right arrows or use the arrows on your keyboard to scroll through the different flavors!</p>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;



