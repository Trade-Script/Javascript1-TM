function addImage() {
  let url = uploadForm.address.value;
  let div = document.getElementById("images");
  let img = document.createElement("img");
  img.src = url;
  div.appendChild(img);
}
