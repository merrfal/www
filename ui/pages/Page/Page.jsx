import { Normal } from "../../layouts";
import { Header, Content } from "./";

export default function Page({ mode }) {
  return (
    <Normal>
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <Header mode={mode} />
        <Content mode={mode} />
      </div>
    </Normal>
  );
}
