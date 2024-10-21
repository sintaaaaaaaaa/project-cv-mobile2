import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function RowRiwayat(props: { jenjang: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; sekolah: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; tahun: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; Instansi: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; Jabatan: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) {
    return(
    <div className="border-2 border-indigo-500/75 rounded-lg bg-blue-200 p-2 my-5">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-3">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-3">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-3">{props.tahun}</div>
          <div className="col-span-12 md:col-span-3">{props.Instansi}</div>
          <div className="col-span-12 md:col-span-3">{props.Jabatan}</div>
          </div>
          </div>
          </div>
);
}