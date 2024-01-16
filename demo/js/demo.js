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
  appendAvatar(randomString(32), container, 'avatar bg-body-tertiary avatar-round avatar-lg')
}

function generateCrowd() {
  const crowd = document.querySelector('.crowd')

  for (let i = 0; i < 9; i++) {
    appendAvatar(randomString(32), crowd, `crowd-avatar avatar-${i}`, {background: false})
  }
}

function generateGrid(container, samples, className) {
  samples.map(function (sample) {
    appendAvatar(sample, container, 'avatar bg-body-tertiary ' + className)
  })
}

function appendAvatar(string, container, classNames, options) {
  const avatar = TinyAvatar(string, options)

  const avatarDom = document.createElement('div')
  avatarDom.classList = classNames
  avatarDom.innerHTML = avatar + '<span class="visually-hidden">'+string+'</span>'

  container.append(avatarDom)
}
