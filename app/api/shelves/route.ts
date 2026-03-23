import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

async function ensureTable() {
  await sql`CREATE TABLE IF NOT EXISTS shelves (
    id SERIAL PRIMARY KEY,
    kind VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    img TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  )`;
}

export async function GET() {
  try {
    await ensureTable();
    const rows = await sql`SELECT * FROM shelves ORDER BY id`;
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: "셀프를 불러오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureTable();
    const { kind, title, subtitle, img } = await request.json();
    if (!kind || !title) {
      return NextResponse.json({ error: "필수 필드가 누락되었습니다." }, { status: 400 });
    }
    const rows = await sql`
      INSERT INTO shelves (kind, title, subtitle, img)
      VALUES (${kind}, ${title}, ${subtitle ?? null}, ${img ?? null}) RETURNING *
    `;
    return NextResponse.json(rows[0], { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "셀프 생성 중 오류가 발생했습니다." }, { status: 500 });
  }
}
