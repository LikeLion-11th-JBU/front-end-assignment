const images = ['0.jpeg', '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 사진 랜덤 고르기 

//이미지 요소 만들기 (img요소 생성)
const bgImage = document.createElement('img'); 

//이미지 소스 가져오기(chosenImage의 값을 받는다.)
bgImage.src = `img/${chosenImage}`; 

// appendChild() :html 추가
//아래 같은 경우 body에 img src 를 넣는다
document.body.appendChild(bgImage); 
