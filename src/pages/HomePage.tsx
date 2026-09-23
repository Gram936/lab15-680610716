
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center gap-6 p-8 pt-16">
      <div className="w-full max-w-md rounded-xl border bg-card p-6 text-card-foreground">
        <h1 className="mb-4 text-xl font-semibold">
          ระบบลงทะเบียนเรียน CPE & ISNE
        </h1>
        <Button render={<Link to="/enrollment" />}>
          ไปหน้าลงทะเบียนเรียน
        </Button>
      </div>

      <p className="text-sm text-primary">
        จัดทำโดย Winatthapon Jansuk รหัสนักศึกษา 680610716
      </p>
    </div>
  );
}