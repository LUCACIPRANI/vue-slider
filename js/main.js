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
    ],
  },
  created() {
    this.interval();
  },
  methods: {
    interval() {
      setInterval(this.nextPhoto, 3000);
    },
    prevPhoto() {
      this.counterPhotoIndex -= 1;
      if (this.counterPhotoIndex < 0)
        this.counterPhotoIndex = this.photos.length - 1;
      //   this.message.textContent = "dff";
    },
    nextPhoto() {
      this.counterPhotoIndex += 1;
      if (this.counterPhotoIndex == this.photos.length)
        this.counterPhotoIndex = 0;
    },
    currentPhoto(index) {
      this.counterPhotoIndex = index;
    },
  },
});
