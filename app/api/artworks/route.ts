import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

async function ensureTable() {
  await sql`CREATE TABLE IF NOT EXISTS artworks (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist_name VARCHAR(255) NOT NULL,
    price_label VARCHAR(100),
    img TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  )`;
}

export async function GET() {
  try {
    await ensureTable();
    const rows = await sql`SELECT * FROM artworks ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: "작품을 불러오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureTable();
    const { id, title, artistName, priceLabel, img } = await request.json();
    if (!id || !title || !artistName) {
      return NextResponse.json({ error: "필수 필드가 누락되었습니다." }, { status: 400 });
    }
    await sql`
      INSERT INTO artworks (id, title, artist_name, price_label, img)
      VALUES (${id}, ${title}, ${artistName}, ${priceLabel ?? null}, ${img ?? null})
      ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, artist_name = EXCLUDED.artist_name, price_label = EXCLUDED.price_label, img = EXCLUDED.img
    `;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "작품 저장 중 오류가 발생했습니다." }, { status: 500 });
  }
}
