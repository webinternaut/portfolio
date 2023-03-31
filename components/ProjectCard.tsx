import Link from 'next/link';
import Image from 'next/image'
import { Project } from '@/interface/types';

export default function ProjectCard ({ project }: { project: Project }) {
  return (
    <div className="max-w-sm m-3  ">
      <Link href={`/projects/${project.id}`} >
          <img src={project.imageUrl} alt={project.title} className="rounded-lg hover:shadow-lg transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-200 duration-600" />
          <h3>{project.title}</h3>
          {/* <div className='text-gray-400 text-normal text-left text-xs uppercase'>{project.status} | {project.year} | {project.company}</div> */}
      </Link>
    </div>
  );
}