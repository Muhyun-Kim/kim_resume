import PageTitle from "../Components/PageTitle";
import ProjectForm from "../Components/ProjectForm";
import firstProject from "../assets/firstProject.png";

function Project() {
  return (
    <>
      <div className="flex flex-col items-center w-11/12 mt-32 max-md:my-16">
        <PageTitle title="Project" />
        {/** first project */}
        <ProjectForm
          projectName={"Pair Schedule"}
          projectDetail={"二人でスケジュールを共有するアプリ"}
          appLink={"https://apps.apple.com/jp/app/pair-schedule/id6448741321"}
          sourceLink={"https://github.com/Muhyun-Kim/couple_share_schedule"}
          projectImg={firstProject}
        />
      </div>
    </>
  );
}

export default Project;
