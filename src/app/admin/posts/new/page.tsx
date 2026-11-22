import AdminShell from "@/components/admin/shell";
import PostEditor from "@/components/admin/post-editor";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function NewPost() {
  await requireAdmin();
  return <AdminShell active="posts"><PostEditor /></AdminShell>;
}
