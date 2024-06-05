const BG_REMOVAL_OPTIONS = {
  url: "https://alrig.ht/pib.py",
};

const backgroundImages = [
  "./assets/backgrounds/b1/None.png", //
  "./assets/backgrounds/b1/Alley.png",
  "./assets/backgrounds/b1/Battlefield.png",
  "./assets/backgrounds/b1/Beijing.png",
  "./assets/backgrounds/b1/Bo Jin's Workshop.png",
  "./assets/backgrounds/b1/Chen's Courtyard.png",
  "./assets/backgrounds/b1/Cheung Sha Beach.png",
  "./assets/backgrounds/b1/Chongqing.png",
  "./assets/backgrounds/b1/Congress Hall.png",
  "./assets/backgrounds/b1/Dam.png",
  "./assets/backgrounds/b1/Factory.png",
  "./assets/backgrounds/b1/Hangzhou.png",
  "./assets/backgrounds/b1/Huashan Plank Walk.png",
  "./assets/backgrounds/b1/Guilin River.png",
  "./assets/backgrounds/b1/Gym.png",
  "./assets/backgrounds/b1/Living Room.png",
  "./assets/backgrounds/b1/Market.png",
  "./assets/backgrounds/b1/Mona Lisa.png",
  "./assets/backgrounds/b1/Monster Building.png",
  "./assets/backgrounds/b1/Mount Everest.png",
  "./assets/backgrounds/b1/Opium Den.png",
  "./assets/backgrounds/b1/Qin Palace.png",
  "./assets/backgrounds/b1/Revolution.png",
  "./assets/backgrounds/b1/Rice Terraces.png",
  "./assets/backgrounds/b1/Rustic Apartment.png",
  "./assets/backgrounds/b1/Semiconductor Factory.png",
  "./assets/backgrounds/b1/Shaolin Temple.png",
  "./assets/backgrounds/b1/The Great Wall.png",
  "./assets/backgrounds/b1/Tiananmen Square.png",
  "./assets/backgrounds/b1/Venice.png",
  "./assets/backgrounds/b1/Venue.png",
  "./assets/backgrounds/b1/Virus Safety Facility.png",
  "./assets/backgrounds/b1/Wenzhou.png",
  "./assets/backgrounds/b1/Xi'an City Wall.png",
  "./assets/backgrounds/b1/Xi'an City Mall.png",
];

const overlayImages = [
  //
  "./assets/overlays/o1/aajonus.png",
  "./assets/overlays/o1/apetamin.png",
  "./assets/overlays/o1/bastard.png",
  "./assets/overlays/o1/blu.png",
  "./assets/overlays/o1/bojin.png",
  "./assets/overlays/o1/boss.png",
  "./assets/overlays/o1/brahkart.png",
  "./assets/overlays/o1/chadmaxx.png",
  "./assets/overlays/o1/chadpoint.png",
  "./assets/overlays/o1/cleanse.png",
  "./assets/overlays/o1/coach.png",
  "./assets/overlays/o1/coco.png",
  "./assets/overlays/o1/egg.png",
  "./assets/overlays/o1/energy.png",
  "./assets/overlays/o1/girl.png",
  "./assets/overlays/o1/gong.png",
  "./assets/overlays/o1/kokomama.png",
  "./assets/overlays/o1/mylady.png",
  "./assets/overlays/o1/rawbeef.png",
  "./assets/overlays/o1/riceflour.png",
  "./assets/overlays/o1/speed.png",
  "./assets/overlays/o1/tigerpenis.png",

  "./assets/overlays/o2/7k.png",
  "./assets/overlays/o2/poseidon.png",
  "./assets/overlays/o2/rhino.png",
  "./assets/overlays/o2/saiga-horn.gif",
  "./assets/overlays/o2/strong-buck.jpg",
  "./assets/overlays/o2/stud100.png",
  "./assets/overlays/o2/token.png",
];

document.addEventListener("DOMContentLoaded", function (event) {
  const input = document.getElementById("file");
  const resultImage = document.getElementById("result-image");
  const downloadButton = document.getElementById("download-button");
  const sectionParsed = document.getElementById("sectionParsed");
  const spinner = document.getElementById("spinner");

  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) {
      return false;
    }

    sectionParsed.hidden = true;
    spinner.hidden = false;

    // Prepare request for background removal and NSFW detection
    const form = new FormData();
    form.append("image", file);
    const requestOptions = {
      method: "POST",
      body: form,
    };

    // Make request to the server endpoint
    fetch(BG_REMOVAL_OPTIONS.url, requestOptions)
      .then((response) => response.json())
      .then(function (response) {
        if (response.results === "nsfw") {
          // Reject the image if it's NSFW
          alert("Bad image are not allow!");
          spinner.hidden = true;
          return;
        }

        if (Array.isArray(response.results) && response.results.length > 0) {
          const result = response.results[0];
          if (result.entities && result.entities.length > 0) {
            const imageEntity = result.entities.find((entity) => entity.kind === "image");
            if (imageEntity) {
              const imgBase64 = imageEntity.image;
              const foregroundImage = new Image();
              foregroundImage.src = "data:image/png;base64," + imgBase64;
              foregroundImage.onload = function () {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = foregroundImage.width;
                canvas.height = foregroundImage.height;

                const randomBackgroundIndex = Math.floor(Math.random() * backgroundImages.length);
                const backgroundImageSrc = backgroundImages[randomBackgroundIndex];
                const backgroundImage = new Image();
                backgroundImage.src = backgroundImageSrc;
                backgroundImage.onload = function () {
                  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
                  ctx.drawImage(foregroundImage, 0, 0);

                  const randomOverlayIndex = Math.floor(Math.random() * overlayImages.length);
                  const overlayImage = new Image();
                  overlayImage.src = overlayImages[randomOverlayIndex];
                  overlayImage.onload = function () {
                    const srcWidth = overlayImage.width;
                    const srcHeight = overlayImage.height;
                    const ratio = srcWidth / srcHeight;

                    const maxLen = 200;
                    const margin = 5;

                    let overlayWidth = 0;
                    let overlayHeight = 0;

                    if (ratio > 1) {
                      overlayWidth = maxLen;
                      overlayHeight = maxLen / ratio;
                    } else {
                      overlayWidth = maxLen * ratio;
                      overlayHeight = maxLen;
                    }

                    const overlayX = canvas.width - overlayWidth - margin;
                    const overlayY = canvas.height - overlayHeight - margin;

                    ctx.drawImage(overlayImage, overlayX, overlayY, overlayWidth, overlayHeight);
                    resultImage.src = canvas.toDataURL();
                    sectionParsed.hidden = false;
                  };
                };
              };
            } else {
              console.error("Image entity not found in the response.");
            }
          } else {
            console.error("No entities found in the response.");
          }
        } else {
          console.error("Invalid response format.");
        }
      })
      .catch(function (error) {
        console.error(error);
      })
      .then(function () {
        spinner.hidden = true;
      });
  });

  downloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = resultImage.src;
    link.download = "result.png";
    link.click();
  });
});
