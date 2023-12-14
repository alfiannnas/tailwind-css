import React from "react";
import Second from "../Components/Second";

export default function Home() {
  const Nama = "Alfian Kafilah Ba'its ";
  const Text =
    "I'm an Informatics Engineering student with a 3.6 GPA at the Sumatra Institute of Technology and. Currently, I Am participate in the Bangkit Academy Program, specifically in the Machine Learning Path. I have a background and enthusiastic in UI/UX designer, software engineer and machine learning. I hold many certifications in Data Analytics, Machine Learning, Python, and many other";

  return <Second title={Nama} text={Text} />;
}
