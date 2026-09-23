import type { Course, Student } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CourseCardProps = {
  course: Course;
  student: Student;
  enrolledAt?: string;
  isEnrolled?: boolean;
  onCancel?: (courseId: string) => void;
};

export function CourseCard({ course, student, enrolledAt, isEnrolled = false, onCancel }: CourseCardProps) {
  return (
    <Card className={isEnrolled ? "border-amber-300 dark:border-purple-700" : ""}>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base">{course.courseTitle}</CardTitle>
          <Badge status={isEnrolled ? "enrolled" : "open"}>
            {isEnrolled ? "ลงทะเบียนแล้ว" : "เปิดรับ"}
          </Badge>
        </div>
        <CardDescription>
          รหัสวิชา: {course.courseId} · ผู้สอน: {course.instructors.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-end justify-between">
        <div className="text-xs text-muted-foreground">
          <p>
            ชื่อ นศ.: {student.firstName} {student.lastName}
          </p>
          <p>โปรแกรม: {student.program}</p>
          <p>ลงทะเบียนเมื่อ: {enrolledAt}</p>
        </div>
        {enrolledAt && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCancel?.(course.courseId)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}