
const options = {
  bottom: 'unset', // Poziționarea pe partea de jos dezactivată
  right: '32px',   // Poziționat la 32px de marginea dreaptă
  left: 'unset',   // Dezactivează poziționarea pe partea stângă
  top: '31px',     // Adaugă top pentru a-l pune la marginea de sus
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: 'transparent',
  buttonColorDark: 'transparent',
  buttonColorLight: 'black',
  saveInCookies: false,
  label: '🌓',
  autoMatchOsTheme: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
