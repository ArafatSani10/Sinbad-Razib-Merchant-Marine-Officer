import AdminShell from "@/components/admin/shell";
import { requireAdmin } from "@/lib/auth";
import { deleteMessage, setMessageRead } from "../actions";

export const dynamic = "force-dynamic";
type Msg = { id: string; name: string; email: string; subject: string; body: string; is_read: boolean; created_at: string };

export default async function Messages() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("messages").select("*").order("created_at", { ascending: false }).limit(200);
  const msgs = (data ?? []) as Msg[];
  const unread = msgs.filter((m) => !m.is_read).length;

  return (
    <AdminShell active="messages" unread={unread}>
      <h1 className="text-3xl font-bold text-navy-950">Messages</h1>
      <p className="mt-2 text-navy-800">Sent from the contact form.</p>
      <div className="mt-8 space-y-4">
        {msgs.length === 0 && <div className="bg-white p-12 text-center"><p className="text-lg font-bold text-navy-950">No messages yet</p><p className="mt-1 text-navy-600">New contact form messages will appear here.</p></div>}
        {msgs.map((m) => (
          <article key={m.id} className={`bg-white p-6 ${m.is_read ? "" : "border-l-4 border-brass-400"}`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-bold text-navy-950">{m.subject || "(no subject)"}</p>
                <p className="text-sm text-navy-600">{m.name}, <a className="underline" href={`mailto:${m.email}`}>{m.email}</a>, {new Date(m.created_at).toLocaleString("en-GB")}</p>
              </div>
              <div className="flex gap-4 text-sm font-semibold">
                <form action={setMessageRead}><input type="hidden" name="id" value={m.id} /><input type="hidden" name="read" value={String(!m.is_read)} /><button className="text-navy-900 hover:underline">{m.is_read ? "Mark unread" : "Mark read"}</button></form>
                <form action={deleteMessage}><input type="hidden" name="id" value={m.id} /><button className="text-signal hover:underline">Delete</button></form>
              </div>
            </div>
            <p className="mt-4 whitespace-pre-wrap text-navy-900">{m.body}</p>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
