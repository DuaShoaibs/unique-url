const generateLinkBtn = document.getElementById('generateLinkBtn');
const usernameInput = document.getElementById('usernameInput');
const resumeLinkSpan = document.getElementById('resumeLink');
const shareSection = document.getElementById('shareSection');
const copyLinkBtn = document.getElementById('copyLinkBtn');

generateLinkBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    const resumeLink = `${window.location.origin}/resume.html?username=${username}`;
    resumeLinkSpan.textContent = resumeLink;
    shareSection.style.display = 'block';
  } else {
    alert('Please enter a username!');
  }
});

copyLinkBtn.addEventListener('click', () => {
  const copyText = resumeLinkSpan.textContent;
  navigator.clipboard.writeText(copyText)
    .then(() => alert('Resume link copied to clipboard!'))
    .catch(() => alert('Failed to copy link.'));
});
