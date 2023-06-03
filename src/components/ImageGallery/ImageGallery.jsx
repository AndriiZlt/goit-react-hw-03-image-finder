import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.galleryItems.map(
          ({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onClick={this.props.toggleModal}
              modalHandler={this.props.modalHandler}
            />
          )
        )}
      </ul>
    );
  }
}

export default ImageGallery;
