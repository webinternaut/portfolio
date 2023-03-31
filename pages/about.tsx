import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {


  return (
    <>
      <div className='border-b-2 border-gray-200 pb-10 mb-10'>
        <h1>Paul Eschli (peschli)</h1>
          <p>
          <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="h-40 max-w-full rounded-full float-right" alt="" />
          Passionate about design innovation and user experience, I have over 20 years of experience bringing design to cutting-edge technologies. My unique skill set has set new standards in various industries, and as a team player, I bring creative solutions to impact not just the end product, but also internal processes. My expertise in design research, product innovation, AI/ML design, prototyping, user testing, front-end development and digital marketing, as well as my understanding of technology and its capabilities, ensures successful adoption and usability for users.
          </p>
      </div>
      <div className='border-b-2 border-gray-200 pb-10'>
          <h1>Skills</h1>
          <h2>Tech Experience</h2>     
          <ul className='mb-4'>
            <li>Artifiticial Intelligence (AI): YOLO, CHAT-GTP, Machine Learning</li>
            <li>Blockchain: NFT, Crypto transactions, general tech understanding</li>
            <li>Dev-Op Tech: Docker, LXD, LXC, Snap, CLI,</li>
            <li>Dev: HTML5, Javascript, React, Tailwinds, NextJS, Kotlin </li>
          </ul>
        <h2>Software</h2>     
          <ul>
            <li>Digital Graphics: Sketch, Affinity Suite, Adobe XD, Photoshop, Illustrator and  After Effects</li>
            <li>Wireframing & Ideation: Hand sketch, Kakao Oven, Xtensio and Draw.io</li>
            <li>Prototyping: HTML5, CSS3(Sass), JavaScript, Invision, Marvel App, Studio XID ProtoPie and Adobe Experience Design (XD)</li>
            <li>Co-working Ability: Github, GitLab, Jira, Zeplin, Slack, Trello, MS Teams</li>
          </ul>
      </div>
    </>

  );
}
