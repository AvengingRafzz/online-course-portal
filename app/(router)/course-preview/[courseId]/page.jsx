"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function CoursePreview({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState();
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState(false);
  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  useEffect(() => {
    courseInfo && user && checkUserEnrolledToCourse();
  }, [courseInfo, user]);

  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((resp) => {
      setCourseInfo(resp?.courseList);
    });
  };

  /**
   * To Check user already enrolled to course
   **/
  const checkUserEnrolledToCourse = () => {
    GlobalApi.checkUserEnrolledToCourse(
      courseInfo.slug,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      console.log(resp)
      if (resp?.userEnrollCourses[0]?.id) {
        setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
      }
    });
  };

  return (
    courseInfo && (
      <div className="grid grid-cols-2 md:grid-cols-3 p-5 gap-3">
        {/* Title Video Description */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription
            courseInfo={courseInfo}
          ></CourseVideoDescription>
        </div>
        {/* Course Content */}
        <div>
          <CourseEnrollSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          ></CourseEnrollSection>
          <CourseContentSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          ></CourseContentSection>
        </div>
      </div>
    )
  );
}

export default CoursePreview;
