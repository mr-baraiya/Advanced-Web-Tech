import { query } from "@/lib/db";
import type { User } from "@/types/user";

export default async function UsersPage() {
  const users = await query<User>("SELECT * FROM users");

  return (
    <div style={{ padding: "40px" }}>
      <h1>Users</h1>

      <ul>
        {users.map((u) => (
          <li key={u.user_id}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
