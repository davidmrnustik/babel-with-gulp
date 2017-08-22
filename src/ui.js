import xss from 'xss-filters';

let ui = {
  renderPosts(posts){
    let elements = posts.map( (post) => {
      let { name, company } = post;
      return articleTemplate( name, company );
    });

    let target = document.querySelector(".container");
    target.innerHTML = elements.join("");
  },

  renderUsers(users){
    let elements = users.map( (user) => {
      let { name, avatar } = user;
      return userTemplate(name, avatar);
    })

    let target = document.querySelector(".sidebar-content");
    target.innerHTML = elements.join("");
  }
}

function userTemplate(name, avatar) {
  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);

  let template = `
    <div class='active-avatar'>
      <img width=54 src='${safeAvatar}' />
      <h5 class='post-author'>${safeName}</h5>
    </div>`;

  return template;

}

function articleTemplate(name, company) {
  let safeName = xss.inHTMLData(name);
  let safeCompany = xss.inHTMLData(company);
  let template = `
    <article class='post'>
      <h2 class='post-title'>
        ${safeName}
      </h2>
      <p class='post-meta'> 
        ${safeCompany}
      </p>
    </article>`;

  return template;
  
}


export default ui;