import React from "react";
import Main from "./../components/main";

export default function Home() {
  const engineeringSkills = [
    "TypeScript",
    "Python",
    "React",
    "Flutter",
    "MySQL",
    "MongoDB",
    "Firebase",
  ];
  const productSkills = ["UI/UX Design (Figma)", "Wireframing", "Prototyping"];

  return (
    <Main engineeringSkills={engineeringSkills} productSkills={productSkills} />
  );
}
