import { ProjectsList } from "../../../data";
import { Translation } from "../../../utils/Translations";

export default function Projects() {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 select-none">
        {Translation("other-projects")}
      </h3>

      <ul className="mt-6 space-y-6">
        {ProjectsList.map((project, index) => (
          <li className="text-sm" key={index} style={{lineHeight: 1}}>
            <a
              href={project.path}
              target="_blank"
              className="text-gray-500 hover:text-gray-600"
            >
              {project.name} {project.icon && `\u2192` }
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
