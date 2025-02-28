import React from "react";

const Subject = ({ sub }) => {
  return (
    <>
      <p className="capitalize bg-black text-white py-1 px-3 rounded">{sub}</p>
    </>
  );
};

const Student = ({ student }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-700 p-5 rounded font-bold ">
      <p>Name = {student.studentName}</p>
      <p>College = {student.college}</p>
      <p>Afiliatted to = {student.affiliatedTo}</p>
      <p>Level = {student.level}</p>
      <p>Faculty = {student.faculty}</p>
      <p>Program = {student.program}</p>

      <p className=" flex gap-3 mx-auto items-center">
        {student.subjects.map((item, index) => (
          <Subject key={index} sub={item} />
        ))}
      </p>
    </div>
  );
};

const Props = () => {
  const studentLists = [];
  const studentList = [
    {
      college: "Oxford College of Engineering and Management",
      studentName: "Pradeep Kunwar",
      affiliatedTo: "Pokhara University",
      level: "Bachelor",
      faculty: "Science and Technology",
      program: "BCA",
      subjects: [
        "Mathematics",
        "English",
        "Digital Logic",
        "Programming Logic",
        "Database Management",
      ],
    },
    {
      college: "Lumbini College of Information and Technology",
      studentName: "Prajeena Pokhrel",
      affiliatedTo: "Tribhuvan University",
      level: "Master",
      faculty: "Science and Technology",
      program: "MCA",
      subjects: [
        "Advanced Algorithms",
        "Machine Learning",
        "Cloud Computing",
        "Cyber Security",
        "Big Data Analytics",
      ],
    },
    {
      college: "Pulchowk College",
      studentName: "Jeena Ortega",
      affiliatedTo: "Kathmandu University",
      level: "Bachelor",
      faculty: "Management",
      program: "BBA",
      subjects: [
        "Financial Accounting",
        "Marketing Management",
        "Business Law",
        "Human Resource Management",
        "Entrepreneurship",
      ],
    },
    {
      college: "Mechi Engineering College",
      studentName: "Samir Sharma",
      affiliatedTo: "Purbanchal University",
      level: "Bachelor",
      faculty: "Engineering",
      program: "BE Civil",
      subjects: [
        "Structural Analysis",
        "Hydraulics",
        "Surveying",
        "Building Construction",
        "Transportation Engineering",
      ],
    },
    {
      college: "Kantipur City College",
      studentName: "Ritika Thapa",
      affiliatedTo: "Tribhuvan University",
      level: "Bachelor",
      faculty: "Science and Technology",
      program: "BSc CSIT",
      subjects: [
        "Artificial Intelligence",
        "Computer Networks",
        "Operating Systems",
        "Data Structures",
        "Software Engineering",
      ],
    },
    {
      college: "Himalaya College of Nursing",
      studentName: "Sneha Karki",
      affiliatedTo: "Pokhara University",
      level: "Bachelor",
      faculty: "Health Sciences",
      program: "BN",
      subjects: [
        "Anatomy",
        "Physiology",
        "Pharmacology",
        "Community Health Nursing",
        "Pediatrics Nursing",
      ],
    },
    {
      college: "Birgunj Medical College",
      studentName: "Aayush Gupta",
      affiliatedTo: "Tribhuvan University",
      level: "Bachelor",
      faculty: "Medical",
      program: "MBBS",
      subjects: [
        "General Medicine",
        "Pathology",
        "Microbiology",
        "Surgery",
        "Pharmacology",
      ],
    },
  ];

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
