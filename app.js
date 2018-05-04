window.onload= function(){
var likeCount = localStorage.getItem("like");
var loveCount = localStorage.getItem("love");
var laughCount = localStorage.getItem("laugh");
var likeImage = document.getElementById("like-image");
var loveImage = document.getElementById("love-image");
var laughImage = document.getElementById("laugh-image");
var likeText = document.getElementById('like-count');
var loveText = document.getElementById('love-count');
var laughText = document.getElementById('laugh-count');
var reset = document.getElementById("btn")

likeImage.addEventListener('click', function(){
    likeCount++;
    localStorage.setItem('like', likeCount);
    likeText.innerHTML = likeCount;
});

loveImage.addEventListener('click', function(){
    loveCount++;
    localStorage.setItem('love', loveCount);
    loveText.innerHTML = loveCount;

});

laughImage.addEventListener('click', function(){
    laughCount++;
    localStorage.setItem('laugh', laughCount);
    laughText.innerHTML = laughCount;

});
reset.addEventListener('click', function(){
localStorage.clear();

});
};