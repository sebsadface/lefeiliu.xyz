import { getProjects } from '../../api';

export const projects = async (args: string[]): Promise<string> => {
  // const projects = await getProjects();

  // return projects
  //   .filter((repo) => !repo.fork)
  //   .map(
  //     (repo) =>
  //       `☕️ ${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
  //   )
  //   .join('\n');
  return`🏗️ under maintenance...👨‍🔧 \n \n 👉 please check out my github instead: <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/sebsadface/" target="_blank">Link to Github</a>`
};
