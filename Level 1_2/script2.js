const app = document.getElementById('todo');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(userId => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = userId.userId;
      
      const h2 = 
      document.createElement('h2');       h2.textContent = userId.id;    

      const p = document.createElement('p');
      userId.title = userId.title.substring(0, 400);
      p.textContent = `${userId.title}...`; 
        
    const h3 = 
    document.createElement('h3');
    h3.textContent = userId.completed;    

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);    
      card.appendChild(p);
      card.appendChild(h3);    
    });
  } 
}

request.send();