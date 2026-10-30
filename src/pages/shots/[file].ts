// 作品リポジトリから取得したスクリーンショットを、サイトの画像ファイルとして書き出す
// （/shots/<slug>.<拡張子>）。取得のルールは src/data/screenshots.ts を参照。
import type { APIRoute, GetStaticPaths } from 'astro';
import { featuredApps } from '../../data/apps';
import { contentTypeOf, fetchRemoteShots } from '../../data/screenshots';

export const getStaticPaths: GetStaticPaths = async () => {
  const shots = await fetchRemoteShots(featuredApps);
  return Object.values(shots).map((s) => ({ params: { file: s.file }, props: { data: s.data } }));
};

export const GET: APIRoute = ({ params, props }) =>
  new Response(props.data as Uint8Array, {
    headers: { 'Content-Type': contentTypeOf(params.file ?? '') },
  });
