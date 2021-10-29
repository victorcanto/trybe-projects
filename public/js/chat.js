/* Chat JS */

const socket = window.io();

const SS_KEY_NICKNAME = 'nickname';
const nicknameForm = document.querySelector('#nickname-form');
const nicknameInput = document.querySelector('#nickname-box');
const nicknameDiv = document.querySelector('#nickname');
const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-box');
const messagesUl = document.querySelector('#messages');
const usersUl = document.querySelector('#list-users');

const createLi = (attributeName) => (attributeValue) => {
  const li = document.createElement('li');
  li.setAttribute(attributeName, attributeValue);
  return li;
};

const checkValidInput = (inputEl) => {
  const messageLen = inputEl.value.length;
  return !!messageLen;
};

const createMessageData = (message, nickname) => ({
  chatMessage: message,
  nickname,
});

const createLiWithDataTestid = createLi('data-testid');

const addMessageToChat = (message) => {
  const li = createLiWithDataTestid('message');
  li.textContent = message;
  messagesUl.appendChild(li);
  messageInput.value = '';
};

const getRandomInt = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const getRandomNickname = (fn) => (qtdChar) => {
  let randomNickname = '';
  const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < qtdChar; i += 1) {
    randomNickname += characters[fn(1, characters.length)];
  }
  return randomNickname;
};

const addToOnlineUser = (nickname) => {
  const li = createLiWithDataTestid('online-user');
  li.textContent = nickname;
  usersUl.appendChild(li);
};

const saveSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const loadSessionStorage = (key) => {
  const result = JSON.parse(sessionStorage.getItem(key));
  return result;
};

const handleChatMessage = (e) => {
  e.preventDefault();
  const nickname = loadSessionStorage(SS_KEY_NICKNAME);
  let messageData;
  if (checkValidInput(messageInput)) {
    saveSessionStorage(SS_KEY_NICKNAME, nickname);
    messageData = createMessageData(messageInput.value, nickname);
    socket.emit('message', messageData);
  }
};

const chooseNickname = (e) => {
  e.preventDefault();
  if (checkValidInput(nicknameInput)) {
    const newNickname = nicknameInput.value;
    nicknameDiv.textContent = newNickname;
    saveSessionStorage(SS_KEY_NICKNAME, newNickname);
    nicknameInput.value = '';
    socket.emit('nickname', loadSessionStorage(SS_KEY_NICKNAME));
  }
};

nicknameForm.addEventListener('submit', chooseNickname);
messageForm.addEventListener('submit', handleChatMessage);

socket.on('connect', () => {
  usersUl.innerHTML = '';
  const randomNickname = getRandomNickname(getRandomInt)(16);
  nicknameDiv.textContent = randomNickname;
  saveSessionStorage(SS_KEY_NICKNAME, randomNickname);
  addToOnlineUser(loadSessionStorage(SS_KEY_NICKNAME));
  socket.emit('nickname', loadSessionStorage(SS_KEY_NICKNAME));
});

socket.on('nickname', (nicknames) => {
  usersUl.innerHTML = '';
  console.log(nicknames);
  nicknames.forEach((nickname) => {
    if (nickname !== nicknameDiv.textContent) {
      addToOnlineUser(nickname);
    }
  });
});

socket.on('message', (message) => addMessageToChat(message));

window.onbeforeunload = () => {
  socket.disconnect();
};
