const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const { ipcRenderer } = require('electron');
    const port = document.getElementById('port');
    ipcRenderer.send('start-server', port.value);
});