import Nav from "@/components/layout/nav";
import Image from "next/image";
import React from "react";

type Props = {};

const TasksByIdPage = (props: Props) => {
  const data = {
    title: "Task Title",
    image:
      "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    description: `A death march is a forced march of prisoners of war or other captives or deportees in which individuals are left to die along the way.[1] It is distinguished in this way from simple prisoner transport via foot march. Article 19 of the Geneva Convention requires that prisoners must be moved away from a danger zone such as an advancing front line, to a place that may be considered more secure. It is not required to evacuate prisoners that are too unwell or injured to move. In times of war such evacuations can be difficult to carry out.
    Death marches usually feature harsh physical labour and abuse, neglect of prisoner injury and illness, deliberate starvation and dehydration, humiliation, torture, and execution of those unable to keep up the marching pace. The march may end at a prisoner-of-war camp or internment camp, or it may continue until all the prisoners are dead.`,
  };
  return (
    <>
      <Nav title="Task" />
      <div className="px-10 mt-10">
        <p>Task Title</p>
        <div className="my-5">
          <Image
            priority
            height={400}
            width={400}
            draggable={false}
            src={data.image}
            objectFit="contain"
            alt={data.title + " Task Image"}
          />
        </div>
        <p>{data.description}</p>
      </div>
    </>
  );
};

export default TasksByIdPage;
