import Student from "./Student";
import { studentList } from "./StudentList";

const Props = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center">
        {studentList.length === 0 && (
          <p className="text-3xl font-extrabold"> Student not found</p>
        )}

        {studentList.map((item, index) => (
          <Student key={index} student={item} />
        ))}
      </div>
    </>
  );
};

export default Props;
