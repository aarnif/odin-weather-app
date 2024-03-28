const loadingIcon = () => {
  const iconContainer = document.createElement("div");
  iconContainer.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="loading-icon">
  <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
  </svg>`;
  return iconContainer;
};

export default loadingIcon;
