async function getData() {
  let response = await fetch(' http://jsonplaceholder.typicode.com/posts')
  let content = await response.json()

  content = content.splice( 0 , 5)

  let list = document.querySelector('.posts')


  let i = 0;

  for (let i = 0; i < 1; i++) {
    list.innerHTML += content[1].title;
    console.log(content);
  }

}



getData()