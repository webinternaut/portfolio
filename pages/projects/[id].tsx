import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Project } from '../../interface/types';
import ReactMarkdown from 'react-markdown';

type ProjectProps = {
  project?: Project
}

const ProjectPage = ({ project }: ProjectProps) => {
const router = useRouter()

if (router.isFallback) {
return <div>Loading...</div>
}

return (
<div>
<Link href="/" passHref legacyBehavior>
                  <a className={router.pathname == "/" ? "active" : ""}>
                    Back
                  </a>
                </Link>
                <h1>{project?.title}</h1>
                <div className='text-gray-400 text-normal text-left text-xs uppercase'>{project?.status} | {project?.year} | {project?.company}</div>
                  <div className='flex justify-center p-9'>
                  <img className='w-76 ' src={project?.imageUrl} alt={project?.title} />
                  </div>
                  <h3 className='text-2xl leading-9 text-gray-600 dark:text-white pb-3'>Introduction</h3>
                  <ReactMarkdown>{project?.inspiration ? project.inspiration : ''}</ReactMarkdown>
                <div className='py-8'>
                <Link href="/" passHref legacyBehavior>
                  <a className={router.pathname == "/" ? "active" : ""}>
                    Back to Projects
                  </a>
                </Link>
                </div>
                </div>
)
}

export const getStaticProps: GetStaticProps<ProjectProps> = async ({ params }) => {
const data = await import('../../public/data.json')
const projects = data.projects
const project = projects.find((p) => p.id === parseInt(params?.id as string))

return {
props: {
project,
},
}
}

export const getStaticPaths: GetStaticPaths = async () => {
const data = await import('../../public/data.json')
const projects = data.projects
const paths = projects.map((project) => ({
params: { id: project.id.toString() },
}))

return {
paths,
fallback: true,
}
}

export default ProjectPage