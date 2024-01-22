function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.round(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
}

function generateBig() {
  const container = document.querySelector('.avatar-preview')
  appendAvatar(randomString(32), container, 'avatar rounded-circle', {background: false})

  setInterval(function () {
    appendAvatar(randomString(32), container, 'avatar rounded-circle', {background: false}, true)
  }, 2500)
}

function generatePilot() {
  const container = document.querySelector('.ufo-pilot')
  appendAvatar(randomString(32), container, '', {background: false})
}

function generateGrid(container, samples, className) {
  samples.map(function (sample) {
    appendAvatar(sample, container, 'avatar bg-body-tertiary ' + className)
  })
}

function appendAvatar(string, container, classNames, options, replace = false) {
  const avatar = TinyAvatar(string, options)

  const avatarDom = document.createElement('div')
  avatarDom.classList = classNames
  avatarDom.innerHTML = avatar + '<span class="visually-hidden">'+string+'</span>'

  if (replace) {
    container.replaceChildren(avatarDom)

  } else {
    container.append(avatarDom)
  }
}
