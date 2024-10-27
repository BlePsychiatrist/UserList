let users = [
    { name: 'Blessing', picture : 'https://i.pravatar.cc/400?img=10' },
    { name: 'Ayodele', picture: 'https://i.pravatar.cc/400?img=6' },
    { name: 'Tola', picture: 'https://i.pravatar.cc/400?img=22' },
    { name: 'Simi', picture: 'https://robohash.org/mail@ashallendesign.co.uk' },
    { name: 'Evelyn', picture: 'https://i.pravatar.cc/400?img=40' }
  ];
  

  function renderUserList(userArray) {
    const userList = document.getElementById('users');
    userList.innerHTML = ''; 
  
    userArray.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
  
      userDiv.innerHTML = `
        <img src="${user.picture}" alt="${user.name}">
        <h2>${user.name}</h2>
      `;
  
      userList.appendChild(userDiv);
    });
  }
  

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  document.getElementById('shuffleBtn').addEventListener('click', () => {
    const shuffledUsers = shuffleArray([...users]);
    renderUserList(shuffledUsers);
  });
  
  
  renderUserList(users);