window.onload = () => {
  const guestSpeakers = [
    {
      image: './assets/images/square-issac.png',
      name: 'Isaac Guerrero',
      role: 'Technical Director',
      bio: 'FC Barcelona Football School',
    },
    {
      image: './assets/images/square-laporta.png',
      name: 'Joan Laporta ',
      role: 'President of the Barcelona club',
      bio: 'Businessman, politician and lawyer.',
    },
    {
      image: './assets/images/square-guardiola.png',
      name: 'Josep Guardiola',
      role: 'Former soccer player and soccer coach.',
      bio: 'Manchester City',

    },
    {
      image: './assets/images/square-nevad.png',
      name: 'Nenad Bjeica',
      role: 'Football Coach',
      bio: 'Gnk Dinamo Zabreg',
    },

    {
      image: './assets/images/square-joseph.png',
      name: 'Johan Cruyff',
      role: 'Former soccer player and soccer coach.',
      bio: 'The best player in Europe of the 20th century',
    },
    {
      image: './assets/images/bussines.png',
      name: 'Daniela Alvez',
      role: 'CEO of the technology department',
      bio: 'Leader in Machine Learning and Barcelona systems.',
    },
  ];

  function displaySpeakerInfo(speakerInfo) {
    const speakers = `<div class="speaker-1">
    <div class="speaker-image">
        <img src=${speakerInfo.image} alt="speaker-1">
    </div>
    <div>
        <h2>${speakerInfo.name}</h2>
        <h3>${speakerInfo.role}</h3>
        <h4>${speakerInfo.bio}</h4>
    </div>
</div>`;
    return speakers;
  }
  const guestSpeakerAtEvent = document.querySelector('.image-display-1');
  guestSpeakers.forEach((card) => {
    guestSpeakerAtEvent.innerHTML += displaySpeakerInfo(card);
  });

  const hamburger = document.querySelector('.menu');
  const closeBtn = document.querySelector('.closeBtn');

  hamburger.addEventListener('click', () => {
    console.log('clicked');
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  close(closeBtn, '.mobile-menu');
  closeBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
    close(menu);
  });

  const backToMainPage = document.querySelector('.menuPopUp');
  close(backToMainPage, '.mobile-menu');
  backToMainPage.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });

  function close(menu, toBeClose) {
    menu.addEventListener('click', () => {
      const value = document.querySelector(toBeClose);
      value.style.display = 'none';
    });
  }
};
