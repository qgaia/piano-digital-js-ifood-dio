document.addEventListener('DOMContentLoaded', function () {
  const pianoKeys = document.querySelector('.piano-keys');
  const keysCheck = document.querySelector('.keys-check input');
  const volumeSlider = document.querySelector('.volume-slider input');
  const keySounds = {};

  // Função para criar uma tecla
  function createKey(dataKey, note) {
    const key = document.createElement('li');
    key.classList.add('key', 'white');
    key.dataset.key = dataKey;
    key.innerHTML = `<span>${note}</span>`;

    // Adicione lógica de eventos para clicar na tecla
    key.addEventListener('mousedown', () => playSound(dataKey));

    return key;
  }

  // Adicione mais teclas conforme necessário
  const keyA = createKey('a', 'C');
  const keyW = createKey('w', 'C#');
  const keyS = createKey('s', 'D');
  const keyE = createKey('e', 'D#');
  const keyD = createKey('d', 'E');
  const keyF = createKey('f', 'F');
  const keyT = createKey('t', 'F#');
  const keyG = createKey('g', 'G');
  const keyY = createKey('y', 'G#');
  const keyH = createKey('h', 'A');
  const keyU = createKey('u', 'A#');
  const keyJ = createKey('j', 'B');
  const keyK = createKey('k', 'C');
  const keyO = createKey('o', 'C#');
  const keyL = createKey('l', 'D');
  const keyP = createKey('p', 'D#');
  const keySemicolon = createKey(';', 'E');

  // Adicione as teclas ao piano
  pianoKeys.appendChild(keyA);
  pianoKeys.appendChild(keyW);
  pianoKeys.appendChild(keyS);
  pianoKeys.appendChild(keyE);
  pianoKeys.appendChild(keyD);
  pianoKeys.appendChild(keyF);
  pianoKeys.appendChild(keyT);
  pianoKeys.appendChild(keyG);
  pianoKeys.appendChild(keyY);
  pianoKeys.appendChild(keyH);
  pianoKeys.appendChild(keyU);
  pianoKeys.appendChild(keyJ);
  pianoKeys.appendChild(keyK);
  pianoKeys.appendChild(keyO);
  pianoKeys.appendChild(keyL);
  pianoKeys.appendChild(keyP);
  pianoKeys.appendChild(keySemicolon);

  // Função para reproduzir o som da tecla
  function playSound(dataKey) {
    const sound = keySounds[dataKey];

    if (sound) {
      sound.play();
    }
  }

  // Configurar sons para cada tecla
  const keys = [
    'a',
    'w',
    's',
    'e',
    'd',
    'f',
    't',
    'g',
    'y',
    'h',
    'u',
    'j',
    'k',
    'o',
    'l',
    'p',
    ';',
  ];
  keys.forEach(key => {
    keySounds[key] = new Howl({
      src: [`./src/tunes/${key}.raw`],
      volume: 0.5,
    });
  });
});
