const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let data = {
    name,
    email,
    phone,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('contact')

  let loading = `<p>loading...</p>`

  let done = `<p>done</p>`

  content.innerHTML = loading


  setTimeout(() => {
    content.innerHTML = done
  }, 1000)

})
