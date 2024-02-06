import config from '../../../config.json';

export const contact = async (args: string[]): Promise<string> => {
  let usage: string = `Usage: contact [arg]
    Args:
      - ls: list all contact info
      - via: go to a contact page
      
    Example:
      contact ls # to list all contact info
      contact via github # contact me via github`;

  if (args.length === 0) {
    return usage;
  }

  switch (args[0]) {
    case 'ls':
      let result = `
      ✉️ email: <a href="mailto:${config.contact.email}">${config.contact.email}</a>\n
      👨🏻‍💻 github: <a href="https://github.com/${config.contact.github}/">${config.contact.github}</a>\n
      𝕏  X (formerly twitter): <a href="https://twitter.com/${config.contact.twitter}/">${config.contact.twitter}</a>\n
      👔 linkedin: <a href="https://linkedin.com/in/${config.contact.linkedin}/">${config.contact.linkedin}</a>\n
      📸 instagram: <a href="https://instagram.com/${config.contact.instagram}/">${config.contact.instagram}</a>\n
      🌳 linktree: <a href="https://linktr.ee/${config.contact.linktree}/">${config.contact.linktree}</a>
      `;

      return result;
    case 'via':
      const selectedContact = args[1];

      switch (selectedContact) {
        case 'github':
          window.open(`https://github.com/${config.contact.github}`);

          return 'Opening github...';
        case 'twitter':
          window.open(`https://twitter.com/${config.contact.twitter}`);

          return 'Opening twitter...';
        case 'linkedin':
          window.open(`https://linkedin.com/in/${config.contact.linkedin}`);

          return 'Opening linkedin...';
        case 'instagram':
          window.open(`https://instagram.com/${config.contact.instagram}`);

          return 'Opening instagram...';
        case 'email':
          window.open(`mailto:${config.contact.email}`);

          return 'Opening email...';
        case 'linktree':
          window.open(`https://linktr.ee/${config.contact.linktree}`);

          return 'Opening linktree...';
        default:
          return `Contact '${selectedContact}' not found. Try 'contact ls' to list all contact info`;
      }
      default:
        return `Command '${args[0]}' not found.\n` + usage;
  }
};

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.contact.instagram}/`);

  return 'Opening instagram...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.contact.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.contact.linkedin}/`);

  return 'Opening linkedin...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://twitter.com/${config.contact.twitter}/`);

  return 'Opening twitter...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.contact.email}`);

  return 'Opening email...';
};

export const linktree = async (args: string[]): Promise<string> => {
  window.open(`https://linktr.ee/${config.contact.linktree}`);

  return 'Opening linktree...';
};
