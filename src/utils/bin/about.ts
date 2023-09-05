import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  const bio = await getBio();
  const why_blockchain = `🤔 Why Blockchain? Type 'whyblockchain' for my answer.`;

  return bio + '\n\n' + why_blockchain + '\n\n';
};

export const whyblockchain = async (args: string[]): Promise<string> => {
  const why_blockchain = `🤔 Why Blockchain? Glad you asked! Here's my current thesis:

    I believe human collaboration has witnessed three transformative shifts:

        1️⃣ Cognitive evolution: Humans, through natural evolution, developed unparalleled cognitive capacities. The
        unique cognitive prowess allowed us to believe in abstract concepts like gods, nations, and human rights.
        Such shared narratives became the foundation of our societal structures, unifying diverse groups and
        fostering cooperation <a href="https://www.ynharari.com/book/sapiens-2/">ℹ︎</a>. However, such collaboration is limited by Dunbar's number <a href="https://www.sciencedirect.com/science/article/abs/pii/004724849290081J/">ℹ︎</a>, which suggests a
        ceiling on social relationships one individual can maintain.

        2️⃣ Institutional and technological innovations of the past: With the advent of monetary systems, economies,
        and information technologies, we externalized many cognitive functions. These innovations amplified the flow
        of information, reduced vulnerabilities, and expanded our cooperative networks. As a result, human
        collaboration scaled beyond the confines of Dunbar's number. Yet, this expansion introduced a new bottleneck:
        establishing trust across vast, diverse entities <a href="https://www.cambridge.org/core/books/governing-the-commons/A8BB63BC4A1433A50A3FB92EDBBB97D5/">ℹ︎</a>.

        3️⃣ Decentralized technologies (e.g., blockchain): Recent advancements in cryptography, game theory, and
        computer science have birthed technologies like blockchain. These are permissionless, decentralized, 
        provable and programmable tools that minimize trust-related vulnerabilities. These tools mitigates
        vulnerabilities arising from interdependencies and intermediaries, thereby offering a new horizon for
        our cooperative capabilities. As Nick Szabo aptly put it, we are ushered into a realm of potentially
        limitless social scalability <a href="http://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html">ℹ︎</a>.

    If human collaboration is the cornerstone of our joint success as a species, and I firmly believe it is, then
    blockchain technology heralds the next epoch of human advancement. I am eager to be at the forefront of this revolution :)`;

  return why_blockchain + '\n\n';
};
