import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

interface IData {
  title: string;
  slug: string;
  content: string;
}
const data: IData[] = [];

for (let i = 0; i < 5; i++) {
  data.push({
    title: faker.lorem.words(),
    slug: faker.lorem.slug(),
    content: faker.lorem.paragraphs(),
  });
}

export async function GET() {
  return NextResponse.json(data);
}
