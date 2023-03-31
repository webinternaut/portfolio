import Layout from '../components/Layout'
import ProjectCard from '@/components/ProjectCard';
import GoogleAnalytics from "../components/GoogleAnalytics";
import { Project } from '../interface/types';

interface HomeProps {
  projects: Project[];
}


export default function Home(props: HomeProps) {
  const projects = props.projects;
  return (
    <>
    <GoogleAnalytics />
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/public/data.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
