import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "Oct 2024 – Present",
      content: (
        <div className="mb-8">
          {/* Company Name */}
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Sanmacs Global
          </h3>
          {/* Role and Location */}
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Full Stack Development Intern
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Delhi</p>
          {/* Points */}
          <ul className="list-disc list-outside text-gray-600 dark:text-gray-400 space-y-4">
            <li>
              Designed and developed a{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                responsive test portal
              </span>{" "}
              using{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Next.js
              </span>, ensuring compatibility and user-friendliness across devices such as desktops, tablets, and smartphones.
            </li>
            <li>
              Developed{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                RESTful APIs
              </span>{" "}
              using{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Go
              </span>{" "}
              and the{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Fiber framework
              </span>, ensuring seamless integration and efficient backend functionality.
            </li>
            <li>
              Collaborated closely with cross-functional teams using{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Git
              </span>{" "}
              and{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                GitHub
              </span>, managing source code, reviewing pull requests, and streamlining development workflows.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Aug 2024 – Oct 2024",
      content: (
        <div className="mb-8">
          {/* Company Name */}
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Skill Chase
          </h3>
          {/* Role and Location */}
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Web Development Intern
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Remote</p>
          {/* Points */}
          <ul className="list-disc list-outside text-gray-600 dark:text-gray-400 space-y-4">
            <li>
              Actively contributed to a team-based development environment by managing{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                version control
              </span>{" "}
              and workflow synchronization using{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Git
              </span>{" "}
              and{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                GitHub
              </span>.
            </li>
            <li>
              Developed{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                responsive and interactive frontend components
              </span>{" "}
              to enhance user experience, ensuring accessibility and ease of use across platforms.
            </li>
            <li>
              Assisted in{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                project planning
              </span>{" "}
              and conducted{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                code reviews
              </span>{" "}
              to ensure high-quality development, adherence to standards, and timely completion of tasks.
            </li>
          </ul>
        </div>
      ),
    },
  ];
    
  return (
    <div className="w-full h-full rounded-md overflow-y-auto">
      <Timeline data={data} />
    </div>
  );
}
