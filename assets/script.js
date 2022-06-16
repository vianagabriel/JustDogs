const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const caBtn = document.getElementById('change-dog');

const getDogs = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

    return data.message;
};

const loadImg = async () => {
  const dogImg = document.getElementById('dog');
  dogImg.src = await getDogs();
};

caBtn.addEventListener('click', () =>{
  loadImg()
})

loadImg()