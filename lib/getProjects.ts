import ProjectData from "@/data/projectData";

export function getMainProjects() {
    return ProjectData.filter(project => project.major)
}

export function getOtherProjects() {
    return ProjectData.filter(project => !project.major);
}