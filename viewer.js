document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('file-input');
  const modelViewer = document.getElementById('viewer');
  const errorMessage = document.getElementById('error-message');
  const errorText = document.getElementById('error-text');

  fileInput.addEventListener('change', handleFileSelect);

  function handleFileSelect(event) {
    const files = event.target.files;
    clearErrorAndViewer();

    if (files.length > 1) {
      showError('複数のファイルが選択されています。1つのファイルのみ選択してください。');
      return;
    }

    const file = files[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.glb')) {
        const objectURL = URL.createObjectURL(file);
        modelViewer.src = objectURL;
      } else {
        showError('選択されたファイルはGLB形式ではありません。GLBファイルを選択してください。');
      }
    }
  }

  function showError(message) {
    errorText.textContent = message;
    errorMessage.style.display = 'block';
    fileInput.value = '';
  }

  function clearErrorAndViewer() {
    errorMessage.style.display = 'none';
    modelViewer.src = '';
  }
});