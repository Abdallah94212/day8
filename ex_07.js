new Vue({
el: '#app',
data() {
return {
chuckNorrisImage: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Bruce-Lee-Chuck-Norris-Way-of-the-Dragon.jpg', 
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
