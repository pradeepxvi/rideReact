import Subject from "./Subject";

const Student = ({ student }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-md w-full mx-auto">
      <h2 className="text-2xl font-extrabold text-center mb-4 text-blue-400">
        Student Profile
      </h2>

      <div className="space-y-2 text-lg">
        <p>
          <span className="text-blue-300">Name:</span> {student.studentName}
        </p>
        <p>
          <span className="text-blue-300">College:</span> {student.college}
        </p>
        <p>
          <span className="text-blue-300">Affiliated To:</span>{" "}
          {student.affiliatedTo}
        </p>
        <p>
          <span className="text-blue-300">Level:</span> {student.level}
        </p>
        <p>
          <span className="text-blue-300">Faculty:</span> {student.faculty}
        </p>
        <p>
          <span className="text-blue-300">Program:</span> {student.program}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-center text-gray-300 mb-3">
          Subjects
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {student.subjects.map((item, index) => (
            <Subject key={index} sub={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Student;
