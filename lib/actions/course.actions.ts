"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { redirect } from "next/navigation";

// todo try catch is left
export async function getCourses(userId: string | undefined) {
  const courses = await prisma.courses.findMany({
    where: {
      creator: userId,
    },
  });

  return courses;
}

export async function getCourse(courseId: string, userId: string) {
  const course = await prisma.courses.findUnique({
    where: {
      id: courseId,
      creator: userId,
    },
  });

  return course;
}

interface courseData {
  courseName: string;
  coursePrice: string;
  creator: string;
  courseImg: string;
  description: string;
}
export async function createCourse(courseData: courseData) {
  try {
    const { courseName, coursePrice, creator, description, courseImg } =
      courseData;
    const course = await prisma.courses.create({
      data: {
        courseName: courseName,
        price: coursePrice,
        creator: creator,
        thambali: courseImg,
        description: description,
      },
    });

    return course;
  } catch (error) {
    console.log(error);
  }
}

export async function getCoursesLength(userId: string) {
  const courses = await prisma.courses.count({
    where: {
      creator: userId,
    },
  });
  return courses;
}
export async function deleteCourseDb(courseId: string, userId: string) {
  const course = await prisma.courses.delete({
    where: {
      id: courseId,
      creator: userId,
    },
  });
  revalidatePath("/dashboard/courses");
}
interface updateCourseData {
  courseId: string;
  userId: string;
  data: {
    courseName: string;
    price: string;
    courseImg: string;
    description: string;
  };
}

export async function updateCourseDb(newCourseData: updateCourseData) {
  const course = await prisma.courses.update({
    where: {
      id: newCourseData.courseId,
      creator: newCourseData.userId,
    },
    data: {
      courseName: newCourseData.data.courseName,
      description: newCourseData.data.description,
      price: newCourseData.data.price,
      thambali: newCourseData.data.courseImg,
    },
  });
  redirect("/dashboard/courses");
}

export async function getCoursesNames(userId: string) {
  const courses = await prisma.courses.findMany({
    where: {
      creator: userId,
    },
    select: {
      courseName: true,
      id: true,
    },
  });

  return courses;
}
interface lecture {
  lecture: string;
  courseId: string;
  creator: string;
  topicName: string;
}
export async function createLecture(lectureData: lecture) {
  try {
    const lecture = await prisma.lectures.create({
      data: {
        topicDesc:"",
        topicName:lectureData.topicName,
        video: lectureData.lecture,
        courseId: lectureData.courseId,
        userId: lectureData.creator,
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/dashboard/courses")
}