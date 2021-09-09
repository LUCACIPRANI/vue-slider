// configurazione vue
Vue.config.devtools = true;

const app = new Vue({
  el: "#root",
  data: {
    counterPhotoIndex: 0,
    photos: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg",
      "img/image5.jpeg",
      "img/image6.jpeg",
    ],
    pause: true,
    idInterval: null
  },
  mounted() {
    // this.interval();
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowRight") {
        this.nextPhoto();
      } else if (e.key == "ArrowLeft") {
        this.prevPhoto();
      }
    });
  },
  methods: {
    interval() {
      setInterval(this.nextPhoto, 3000);
    },
    prevPhoto() {
      this.counterPhotoIndex -= 1;
      if (this.counterPhotoIndex < 0)
        this.counterPhotoIndex = this.photos.length - 1;
    },
    nextPhoto() {
      this.counterPhotoIndex += 1;
      if (this.counterPhotoIndex == this.photos.length)
        this.counterPhotoIndex = 0;
    },
    currentPhoto(index) {
      this.counterPhotoIndex = index;
    },
    toggleVisibility() {
      this.pause = !this.pause;
      this.startStopsSlider();
    },
    startStopsSlider() {
      if(!this.pause) {
        clearInterval(this.idInterval);
        this.idInterval =  setInterval( () => {
          this.nextPhoto() }, 3000);
      } else {
        clearInterval(this.idInterval);
      }
    }
  },
})

