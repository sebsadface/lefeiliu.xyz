import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands_all = Object.keys(bin).sort().join('\n 👉 ');
  const commands = ` 👉 about: a little bit about me \n
  👉 projects: a list of my projects \n
  👉 contact: connect with me`;

  if (args.length === 0) {
    return `Helpful commands:\n ${commands}\n\nType 'help -a' for all commands.`;
  }

  switch (args[0]) {
    case '-a':
      return `All commands:\n 👉 ${commands_all}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
    case '--all':
      return `All commands:\n 👉 ${commands_all}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
    default:
      return `Command '${args[0]}' not found. Type 'help -a' for all commands.`;
  }
};

// same as help
export const ls = async (args: string[]): Promise<string> => {
  const commands_all = Object.keys(bin).sort().join('\n 👉 ');
  const commands = ` 👉 about: a little bit about me \n
  👉 projects: a list of my projects \n
  👉 contact: connect with me`;

  if (args.length === 0) {
    return `Helpful commands:\n ${commands}\n\nType 'help -a' for all commands.`;
  }

  switch (args[0]) {
    case '-a':
      return `All commands:\n 👉 ${commands_all}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
    case '--all':
      return `All commands:\n 👉 ${commands_all}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
    default:
      return `Command '${args[0]}' not found. Type 'help -a' for all commands.`;
  }
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'human';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://gui.sebliu.xyz', '_self');

  return 'Opening GUI version...';
};

// export const email = async (args: string[]): Promise<string> => {
//   window.open('mailto:ll57@cs.washington.edu');

//   return 'Opening mailto:ll57@cs.washington.edu...';
// };

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/sebsadface/sebliu.xyz/tree/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  //window.open(packageJson.funding.url, '_blank');

  // return 'Opening donation url...';

  return 'ETH Address: 0x06B90A9f38351cB0Afed768CaF57DB3d285C099c';
};

export const banner = (args?: string[]): string => {
  return ` 
███████╗███████╗██████╗ ██╗     ██╗██╗   ██╗           ██╗  ██╗██╗   ██╗███████╗
██╔════╝██╔════╝██╔══██╗██║     ██║██║   ██║           ╚██╗██╔╝╚██╗ ██╔╝╚══███╔╝
███████╗█████╗  ██████╔╝██║     ██║██║   ██║            ╚███╔╝  ╚████╔╝   ███╔╝ 
╚════██║██╔══╝  ██╔══██╗██║     ██║██║   ██║            ██╔██╗   ╚██╔╝   ███╔╝  
███████║███████╗██████╔╝███████╗██║╚██████╔╝    ██╗    ██╔╝ ██╗   ██║   ███████╗
╚══════╝╚══════╝╚═════╝ ╚══════╝╚═╝ ╚═════╝     ╚═╝    ╚═╝  ╚═╝   ╚═╝   ╚══════╝ v${packageJson.version}

👉 Type 'help' for some helpful commands.
👉 Type 'gui' for graphical interface.
`;
};


// Old banner
// ███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗    ██╗     ██╗██╗   ██╗
// ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║    ██║     ██║██║   ██║
// ███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║    ██║     ██║██║   ██║
// ╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║    ██║     ██║██║   ██║
// ███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║    ███████╗██║╚██████╔╝
// ╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚══════╝╚═╝ ╚═════╝  v${packageJson.version}
//
// ☁️☁️☁️☁️☁️
// 👋 Hi, I'm Sebastian.
// 👨🏻‍💻 I'm a fourth year Computer Science student at the University of Washington.
// ☁️☁️☁️☁️☁️

export const avatar = (args?: string[]): string => {
  return `░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░▒█████░░░░░░░░░░▓████████████░░░░░░░░░░
░░░░▓▓▒░░░░▒█████▓▓▓▓▓▓▓▓▓▓██████████▓▒▒░░▒▓▓▓▓▓░░
░░░░██▓▒▒▒▒▓█████████████████████████▓▒▒▒▒▓██▓▓▓░░
░░░░█████████████████████████████████████████░░░░░
░░░░████████████████████████████████████████████░░
░░░░▒▒▓██████████████████████████████████████▒▒░░░
░░░░▒▒▓████████████████████▓▓▓▓▓█████████████░░░░░
░░░░███████████████████████▒░░░░▓████████████░░░░░
░▓████████████████████████████████████████▓░░░░░░░
░░░░░░▒██████████▓░░░░░░░░░░░░░░░░░░░░░░▓████░░░░░
░░░░▓▓█████████▓▓░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▓████░░░░░
░░░░███▓▓██████░░░░░██████████████████░░▓██▓▓░░░░░
░░░░██▓░░██████░░░░░██████████████████░░▓██░░░░░░░
░░░░░░▒██████████▒░░░░░░░░░░░░░░░░░░░░░░▓██░░░░░░░
░░░░░░▒██▓▒▓██▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓░░░░░░░
░░░░░░░▓▓▓▓▓██▒░░▒▓▓▓▓▓▓▓▓▓█████▓▓▓▓▓███▓▓▒░░░░░░░
░░░░░░░░░▓████▒░░░░░░░░░░░░▓████▒░░░░▓██░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░░░░░░░░░░░░░░░░▓██░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░██▓░░░░░░░░░░░░▓██░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░▒▒▒▓▓▓▓▓▓▓░░░░░▓██░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░░░▒▓▓▓▓▓▓▓░░░░░▓██░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░░░░░░░░░░░░░░░░▓██░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░███▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░██▓░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░▒██▒░░░░░░░██▓░░░░░░░░░░░░░░░░░░░░░░░░░`;
};