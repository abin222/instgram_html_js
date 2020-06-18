
const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas', true);
request.onload = function () {

  // Begin accessing JSON data here
  
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(post => {
      const feed = document.createElement('div');
      feed.setAttribute('class', 'feed');
		const photo=document.createElement('div');
		photo.setAttribute('class','photo');
		const photo__header=document.createElement('div');
		photo__header.setAttribute('class','photo__header');
		const photo__avatar=document.createElement('img');
		photo__avatar.setAttribute('class','photo__avatar');
		photo__avatar.src = post["low thumbnail"];
		const photo__userinfo=document.createElement('div');
		photo__userinfo.setAttribute('class','photo__userinfo');
		const photo__author=document.createElement('span');
		photo__author.innerHTML=post["id"];
		const img=document.createElement('img');
		img.src=post["medium thumbnail"];
		const photo__info=document.createElement('div');
      photo__info.setAttribute('class', 'photo__info');
     const photo__comments=document.createElement('ul');
      photo__comments.setAttribute('class', 'photo__comments');
	  const photo__comment=document.createElement('li');
      photo__comment.setAttribute('class', 'photo__comment');
	  const photo__caption=document.createElement('span');
      photo__caption.innerHTML = post["title"];
      container.appendChild(feed);
	  feed.appendChild(photo);
	  photo.appendChild(photo__header);
      photo__header.appendChild(photo__avatar);
	   photo__header.appendChild(photo__author);
	   photo.appendChild(img);
	   photo.appendChild(photo__info);
	   photo__info.appendChild(photo__comments);
	   photo__comments.appendChild(photo__comment);
	   photo__comment.appendChild(photo__caption);
		
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();