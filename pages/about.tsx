import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import router, { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter()

  return (
    <>
      <div className='border-b-2 border-gray-200 pb-10 mb-10'>
        <h1>Paul Eschli (peschli)</h1>
          <p>
          <img src="./images/me.jpg" className="h-40 max-w-full rounded-full float-right" alt="" />
          As an accomplished software product designer with extensive experience and a strong skill set, I am deeply committed to design innovation and delivering exceptional user experiences. With a career spanning over 20 years, I have consistently leveraged my expertise to bring cutting-edge design concepts to various industries. Collaborating effectively as a team player, I have successfully introduced creative solutions that not only enhance the final product but also optimize internal processes.
</p><p>
My proficiency in design research, product innovation, AI/ML design, prototyping, user testing, front-end development, and digital marketing, combined with a deep understanding of technology and its capabilities, enables me to ensure the seamless adoption and usability of products for end users. Throughout my career, I have consistently set new standards for excellence and achieved remarkable results, making a significant impact in the industry.
          </p>
      </div>
      {/* <div className='border-b-2 border-gray-200 pb-10'> */}
          {/* <h1>Skills</h1>
          <h2>Tech Experience</h2>     
          <ul className='mb-4'>
            <li>Artifiticial Intelligence (AI): YOLO, CHAT-GPT, Machine Learning</li>
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
          <br></br> */}
        <h2>Request Detailed Resume</h2>
        <p>Due to the sensitive nature of personal information contained in a resume, I maintain its confidentiality by keeping it offline. If you would like to obtain a comprehensive overview of my professional background, kindly reach out to me directly to request my complete resume along with any inquiries you may have.</p>  
        <Link href="/contact" passHref legacyBehavior>
                  <a className={router.pathname == "/contact" ? "active" : ""}>
                    Contact Me
                  </a>
                </Link>
      {/* </div> */}
    </>

  );
}
