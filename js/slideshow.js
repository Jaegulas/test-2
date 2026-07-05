var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n){
    for(var i = 0; i < slides.length; i++){ //배열의 처음부터 끝까지 반복
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function prevSlide(){
    if(current > 0) current -= 1;     //current 값이 0보다 크면 이전 위치로
    else current = slides.length -1;  //그렇지 않으면 마지막 위치로
        showSlides(current);          //이동한 위치의 이미지 표시
}

function nextSlide(){
    if(current < slides.length -1) current += 1;  //current 값이 2보다 작으면 다음 위치로

    else current = 0;                             //그렇지 않다면 첫 번째 위치로 이동
        showSlides(current);                      //이동한 위치의 이미지 표시
}