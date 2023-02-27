function content() {
  const imgsrc = "./assets/img/pic1.jpg";
  const copycontent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint cupiditate rerum at debitis alias beatae veniam nam impedit facere nemo magnam veritatis hic inventore ut, natus, delectus, consequuntur non cum incidunt commodi quisquam ipsa id dolorem! Maiores voluptatum, voluptate esse excepturi vel a corporis voluptates aperiam modi nobis error!";
  const header = "HEADER HOME";
  function extra(params) {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const img2 = img.cloneNode(true);
    const img3 = img.cloneNode(true);
    const img4 = img.cloneNode(true);
    const img5 = img.cloneNode(true);
    const img6 = img.cloneNode(true);

    img2.src = "./assets/img/pic2.jpg";
    img3.src = "./assets/img/pic3.jpg";
    img4.src = "./assets/img/pic4.jpg";
    img5.src = "./assets/img/pic5.jpg";
    img6.src = "./assets/img/pic6.jpg";

    img.setAttribute("src", imgsrc);

    ("./assets/img/pic1.jpg");

    return;
  }
  console.log(extra);
  return { imgsrc, copycontent, header, extra };
}
export default content();
