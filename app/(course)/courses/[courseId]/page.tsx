export default function Page({ params }: { params: { courseId: string } }) {
  return <h1>Course {params.courseId}</h1>;
}
