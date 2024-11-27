const sectionData = {
  perPage: 1,
  blocks: [
    {
      type: "slide",
      preHeading: "Women's Apparel",
      heading: "Elevate your wardrobe with our limited-time fashion offer!",
      imageUrl:
        "//veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=3840&w=800&lazy=load",
      // description: "",
      // buttonLink: "",
      buttonLabel: "Explore More",
      contentAlign: "top-left",
      // textAlign: "center | left | right",
    },
    {
      type: "slide",
      preHeading: "Trendy Classics",
      heading: "Discover Signature Look: Fashion Forward and Fabulous!",
      imageUrl:
        "//veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=3840?&w=800&lazy=load",
      // description: "",
      // buttonLink: "",
      buttonLabel: "Shop Now",
      contentAlign: "center-center",
      // textAlign: "center | left | right",
    },
    {
      type: "slide",
      preHeading: "Modern Elegance",
      heading:
        "Step into the World of Style with the Latest Fashion Trends Unveiled!",
      imageUrl:
        "//veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=3840&lazy=load",
      // description: "",
      // buttonLink: "",
      buttonLabel: "Explore Now",
      contentAlign: "bottom-right",
      // textAlign: "center | left | right",
    },
  ],
};

const splideList = document.querySelector(".splide__list");
const position = document.querySelector("#positions");
let post = "";

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    // type: "loop",
    perPage: sectionData.perPage,
  });
  splide.mount();
});

const CreateSlice = () => {
  splideList.innerHTML = "";

  sectionData.blocks.forEach((data) => {
    const list = document.createElement("li");
    list.classList.add("splide__slide");
    list.innerHTML = `
  
      <img
                src=${data?.imageUrl}
                alt=""
                srcset=""
              />
              <div class="content-cover ${data?.contentAlign}">
                <div class="content">
                  <p class="pre-heading">${data?.preHeading}</p>
                  <div class="heading">
                    ${data?.heading}
                  </div>
                  <button class="btn">${data?.buttonLabel}</button>
                </div>
              </div>
    
    `;

    splideList.appendChild(list);
  });
};

CreateSlice();

position.addEventListener("change", (e) => {
  post = e.target.value;
  console.log(post);
  sectionData.blocks.forEach((data) => (data.contentAlign = post));

  console.log(sectionData.blocks);

  CreateSlice();
  // contentCover.classList.add(post);
});
