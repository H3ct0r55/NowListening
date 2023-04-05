window.addEventListener('load', function() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  const body = document.getElementById('body');
  const main = document.getElementById('main');
  const burger = document.getElementById('burger');
  const dropContent = document.getElementById('dropcontent');
  const albumArt = document.getElementById('albumart');
  const link = document.getElementById('link');
  const title = document.getElementById('title');
  const artist = document.getElementById('artist');
  const spotify = document.getElementById('sp');
  const tidal = document.getElementById('ti');
  const qobuz = document.getElementById('qo');
  const apple = document.getElementById('ap');
  const deezer = document.getElementById('de');
  const amazon = document.getElementById('am');
  const youtube = document.getElementById('yt');
  const play = document.getElementById('play');
  const links = document.getElementById('links');
  let dropOpen = false;
  let newColorScheme;

  // Set initial values
  title.innerHTML = albumTitle;
  artist.innerHTML = albumArtist;
  spotify.href = spLink;
  tidal.href = tiLink;
  qobuz.href = qoLink;
  apple.href = apLink;
  deezer.href = deLink;
  amazon.href = amLink;
  youtube.href = ytLink;

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && darkmode == 2) {
    newColorScheme = 'dark';
  }
  dynamicScheme();

  // Hide bouncy link
  if (bouncylink) {
    setTimeout(() => {
      link.classList.add('opacity-0');
    }, 4000);
  } else {
    link.classList.add('hidden');
  }

  // Mobile dropdown shadow
  if (isMobile) {
    dropContent.classList.add('dropshadow');
    albumArt.classList.remove('widthdesktop');
    albumArt.classList.add('widthmobile');
  }

  // Dynamic scheme handler
  if (darkmode == 2) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      newColorScheme = event.matches ? 'dark' : 'light';
      dynamicScheme();
    });
  }

  function dynamicScheme() {
    const isDarkMode = newColorScheme === 'dark' || darkmode == 0;
    body.classList.toggle('dark', isDarkMode);
    dropContent.classList.toggle('dark', isDarkMode);
    [spotify, tidal, qobuz, apple, deezer, amazon, youtube].forEach(el => el.classList.toggle('darktxt', isDarkMode));
    burger.classList.toggle('darkstroke', isDarkMode);
  }

  // Dropdown handler
  if (!isMobile) {
    burger.onmouseenter = () => {
      dropOpen = true;
      updateDrop();
    };

    dropContent.onmouseleave = () => {
      dropOpen = false;
      updateDrop();
    };
  } else {
    burger.onclick = () => {
      dropOpen = true;
      updateDrop();
    };

    main.onclick = () => {
      if (dropOpen) {
        dropOpen = false;
        updateDrop();
      }
    };
  }

  function updateDrop() {
		if (dropOpen == true) {
			dropContent.classList.remove('opacity-0');
			burger.classList.add('opacity-0');
			link.classList.add('opacity-0');
		} else if (dropOpen == false) {
			burger.classList.remove('hidden');
			burger.classList.remove('opacity-0');
			dropContent.classList.add('opacity-0');
		} else {
			console.log('You Blithering Idiot, you have somehow managed to mess this up');
		};
	};
});