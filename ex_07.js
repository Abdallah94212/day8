new Vue({
el: '#app',
data() {
return {
chuckNorrisImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Chuck_Norris_in_The_Way_of_the_Dragons.jpg', 
};
},
methods: {
moveImage(event) {
const mouseX = event.clientX;
const mouseY = event.clientY;

const offsetX = 100; 
const offsetY = 100; 

const image = document.getElementById('chuck-norris');
image.style.transform = `translate(${mouseX + offsetX}px, ${mouseY + offsetY}px)`;
},
},
});
