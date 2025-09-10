import React from "react";
import CourseCard from "./CourseCard";

function CoursesSection() {
  const courses = [
    {title: "Learn Python", description: "Beginner-friendly Python programming course."},
    {title: "Learn Java", description: "Master object-oriented Java programming."},
    {title: "Web Development", description: "Build modern websites with HTML, CSS, JS."},
  ];

  return (
    <section id="courses" style={{padding: "60px 20px", textAlign: "center"}}>
      <h2 style={{fontSize: "28px", marginBottom: "40px"}}>Our Courses</h2>
      <div style={{display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap"}}>
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} />
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;
