document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const form = document.querySelector('.url-form');
  const copyBtn = document.getElementById('copy-btn');
  const shortUrlText = document.getElementById('short-url');
  const generateItem = document.querySelector('.generate-item');
  const newBtn = document.getElementById('new-btn');
  const darkBtn = document.querySelector('.dark-btn');
  const lightBtn = document.querySelector('.light-btn');
  const logoutBtn = document.querySelector('.logout-btn');

  const menuBtn = document.querySelector('.menu-btn');
  const xBtn = document.querySelector('.x-btn');

  const mobileSettingItem = document.querySelector('.mobile-settings-item');
  const deskBtn = document.querySelector('.desktop-settings-btn')
  const desktopSettingsItem = document.querySelector('.desktop-settings-item');

  const desktopDarkBtn = document.querySelector('.desktop-settings-item .dark-btn');
  const desktopLightBtn = document.querySelector('.desktop-settings-item .light-btn');
  const desktopLogoutBtn = document.querySelector('.desktop-settings-item .logout-btn');



  // copy button 
  if (copyBtn && shortUrlText) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = shortUrlText.innerText || shortUrlText.textContent;
  
      navigator.clipboard.writeText(textToCopy);
      copyBtn.textContent = 'Copied!';
  
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 1500);
    });
  }


    // menu bar switch 
    menuBtn.style.display = "flex";
    xBtn.style.display = "none";
  
    menuBtn.addEventListener('click', () => {
      xBtn.style.display = "flex";
      menuBtn.style.display = "none";
    })
    xBtn.addEventListener('click', () => {
      menuBtn.style.display = "flex";
      xBtn.style.display = "none";
    })

  menuBtn.addEventListener('click', () => {
    xBtn.style.display = "flex";
    menuBtn.style.display = "none";
    mobileSettingItem.classList.remove('hidden');
  });

xBtn.addEventListener('click', () => {
    menuBtn.style.display = "flex";
    xBtn.style.display = "none";
    mobileSettingItem.classList.add('hidden'); 
});



  
  if (deskBtn && desktopSettingsItem) {
    deskBtn.addEventListener('click', () => {
      desktopSettingsItem.classList.toggle('hidden');
    });
  }
  // Dark & Light Mode Setup
  if (desktopDarkBtn && desktopLightBtn) {
  const isDarkMode = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark-mode", isDarkMode);
  desktopDarkBtn.style.display = isDarkMode ? "none" : "flex";
  desktopLightBtn.style.display = isDarkMode ? "flex" : "none";

  // Dark Mode Toggle
  desktopDarkBtn.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    desktopDarkBtn.style.display = "none";
    desktopLightBtn.style.display = "flex";
  });

  // Light Mode Toggle
  desktopLightBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    desktopLightBtn.style.display = "none";
    desktopDarkBtn.style.display = "flex";
  });
}

  // Logout Button Functionality
  if (desktopLogoutBtn) {
    desktopLogoutBtn.addEventListener('click', () => {
      desktopLogoutBtn.style.display = "none";
    });
  }


  // Dark & Light Mode Setup
  const isDarkMode = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark-mode", isDarkMode);
  darkBtn.style.display = isDarkMode ? "none" : "flex";
  lightBtn.style.display = isDarkMode ? "flex" : "none";

  // Dark Mode Toggle
  darkBtn.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    darkBtn.style.display = "none";
    lightBtn.style.display = "flex";
  });

  // Light Mode Toggle
  lightBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    lightBtn.style.display = "none";
    darkBtn.style.display = "flex";
  });

  // logout submission 
  logoutBtn.addEventListener('click', () => {
    logoutBtn.style.display = "none";
  })


  // Generate New button functionality
  if (newBtn) {
    newBtn.addEventListener('click', () => {
      if (form) form.reset();
      generateItem.classList.add('hidden');
    });
  }

  // Handle setting options
  if (settingBtn && settingItem) {
    settingBtn.addEventListener('click', () => {
      settingItem.classList.toggle('hidden');
    });
  }

});


