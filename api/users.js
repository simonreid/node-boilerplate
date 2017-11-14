const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const baseUrl = 'https://api.github.com/users/';

async function getUserAsync(username) {
  const res = await fetch(baseUrl + username)
  let user = await res.json()
  return { user: user, found: res.status === 200 };
}

async function getObjectAsync(url) {
  return await fetch(url);
}

router.get('/api/users/:username', async (req, res) => {
  try {
    const {username} = req.params;
    const userResult = await getUserAsync(username);

    if (!userResult.found) {
      res.status(404).end();
      return;
    }

    res.send(userResult);

  } catch (e) {
    console.log( "error: ", e );
    res.status(500).end();
  }
});

module.exports = router;
