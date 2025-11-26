const cld = new cloudinary.Cloudinary({ cloud_name: 'demo' });

const originalImageUrl = 'https://res.cloudinary.com/demo/image/upload/sample.jpg';
const imgElement = document.getElementById('demo-image');

const applyTextOverlay = () => {
  const transformedUrl = cld.url('sample.jpg', {
    transformation: [
      {
        overlay: 'text:Arial_40_bold:I%20love%20Cloudinary',
        color: 'white',
        background: 'black',
        gravity: 'south',
        y: 20
      }
    ]
  });
  imgElement.src = transformedUrl;
};

const applyCropSquare = () => {
  const transformedUrl = cld.url('sample.jpg', {
    crop: 'fill',
    aspect_ratio: '1:1',
    gravity: 'auto'
  });
  imgElement.src = transformedUrl;
};

const applyCartoonify = () => {
  const transformedUrl = cld.url('sample.jpg', {
    effect: 'cartoonify'
  });
  imgElement.src = transformedUrl;
};

const resetImage = () => {
  imgElement.src = originalImageUrl;
};
