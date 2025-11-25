// Initialize Cloudinary using cloudinary-core
const cld = new cloudinary.Cloudinary({ cloud_name: 'demo' });

const imgElement = document.getElementById('demo-image');
const textOverlayBtn = document.getElementById('text-overlay-btn');
const cropSquareBtn = document.getElementById('crop-square-btn');
const cartoonifyBtn = document.getElementById('cartoonify-btn');
const resetBtn = document.getElementById('reset-btn');

// Original image URL
const originalImageUrl = 'https://res.cloudinary.com/demo/image/upload/sample.jpg';

// Text Overlay transformation
const applyTextOverlay = () => {
  return cld.url('sample.jpg', {
    transformation: [
      {
        overlay: 'text:Arial_40_bold:Avatar%20Is%20The%20Greatest%20Movie',
        color: 'white',
        gravity: 'south',
        y: 20,
        background: 'rgb:00000080'
      }
    ]
  });
};

// Crop to Square transformation
const applyCropSquare = () => {
  return cld.url('sample.jpg', {
    crop: 'fill',
    aspect_ratio: '1:1',
    gravity: 'auto'
  });
};

// Cartoonify transformation
const applyCartoonify = () => {
  return cld.url('sample.jpg', {
    effect: 'cartoonify'
  });
};

// Button click handlers
textOverlayBtn.addEventListener('click', () => {
  imgElement.src = applyTextOverlay();
});

cropSquareBtn.addEventListener('click', () => {
  imgElement.src = applyCropSquare();
});

cartoonifyBtn.addEventListener('click', () => {
  imgElement.src = applyCartoonify();
});

resetBtn.addEventListener('click', () => {
  imgElement.src = originalImageUrl;
});
