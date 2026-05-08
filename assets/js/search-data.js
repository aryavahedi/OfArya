// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-essays",
          title: "Essays",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My projects throughout the years. Unfortunately, I don’t have documentation for every single project I’ve done in my life (I wish I did), but here you can find the projects I documented, along with the exact year I did them.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-the-first-essay",
        
          title: "The First Essay",
        
        description: "A prelude",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-first-essay/";
          
        },
      },{id: "projects-tobacco-pipe-restoration",
          title: 'Tobacco Pipe Restoration',
          description: "Feb 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tobacco_pipe/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
