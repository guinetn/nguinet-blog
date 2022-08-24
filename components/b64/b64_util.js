export default function b64Encode() {
  const b64PlainText = document.querySelector("#b64PlainText").value;
  document.querySelector("#b64EncodedText").value = btoa(b64PlainText);
}

export function b64Decode() {
  const b64EncodedText = document.querySelector("#b64EncodedText").value;
  document.querySelector("#b64PlainText").value = atob(b64EncodedText);
}

export function dragOver(event) {
 event.preventDefault();   // Needed to allow onDrop()
}

// /* Drag-Drop image */

function imageError(img) {
  img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
}

export function onImageDrop(e) {
  e.preventDefault();
  const canvas = document.querySelector("#dropableCanvas");
  const context = canvas.getContext("2d");
  const b64EncodedText = document.querySelector("#b64EncodedText");

  let imageFile = null;
  if (e.dataTransfer.files.length > 0) {
    imageFile = e.dataTransfer.files[0];
  } else {
    imageFile = e.dataTransfer.getData("URL");

    fetch(imageFile)
      .then((response) => response.blob())
      .then(function (myBlob) {
        imageFile = URL.createObjectURL(myBlob);
        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = imageFile;
        
       b64EncodedText.value = canvas.toDataURL();
      });
    return;
  }

  const imageReader = new FileReader();
  imageReader.onload = (imageFile) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = imageFile.target.result;
    image.onload = () => {
      context.drawImage(image, 0, 0, 200, 150);
    };
    if (image.complete || image.complete === undefined) {
      imageError(image);
    }
  };
  imageReader.readAsDataURL(imageFile);
 b64EncodedText.value = canvas.toDataURL();
}
