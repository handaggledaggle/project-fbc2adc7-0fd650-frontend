import { NextResponse } from "next/server";
import {
  verifyToken,
  signAccessToken,
  signRefreshToken,
} from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
      return NextResponse.json(
        { error: "리프레시 토큰이 필요해요." },
        { status: 400 }
      );
    }

    const payload = await verifyToken(refreshToken);
    // verifyToken의 반환 타입은 union 형태이므로 안전하게 확인합니다.
    // payload가 valid인지 확인하고, payload.payload에 실제 페이로드가 담겨있음을 처리합니다.
    if (!payload || ("valid" in payload && !payload.valid)) {
      return NextResponse.json(
        { error: "유효하지 않은 리프레시 토큰이에요." },
        { status: 401 }
      );
    }

    // 여기서는 payload가 valid인 경우로 좁혀졌으므로 payload.payload에 접근합니다.
    const jwtPayload = (payload as { readonly valid: true; readonly payload: { sub: string; type?: string } }).payload;

    if (jwtPayload.type !== "refresh") {
      return NextResponse.json(
        { error: "유효하지 않은 리프레시 토큰이에요." },
        { status: 401 }
      );
    }

    const newAccessToken = await signAccessToken(jwtPayload.sub);
    const newRefreshToken = await signRefreshToken(jwtPayload.sub);

    return NextResponse.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "토큰 갱신 중 문제가 발생했어요." },
      { status: 500 }
    );
  }
}
