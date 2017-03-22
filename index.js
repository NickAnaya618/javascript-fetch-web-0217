const app = "I don't do much.";

const token = 'my_access_token_that_im_keeping_private_whatsup'

fetch('https://api.github.com/repos/jquery/jquery/commits',
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
