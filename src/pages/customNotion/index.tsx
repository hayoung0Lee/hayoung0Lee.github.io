import Head from "next/head";

const CustomNotion = () => {
  return (
    <div>
      <Head>
        <title>Hayoung's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>CustomNotion</div>
      {/* TODO: 좌측에 notion처럼 페이지를 추가하는 기능 구현하기(추가할 때 페이지가 알아서 route됨) */}
      {/* TODO: Drag and Drop이 되는 블럭을 생성해야함 */}
      {/* TODO: 마지막 컨텐츠 다음에는 항상 새로운 블럭을 생성할 수 있도록 해야함 */}
      {/* TODO: 블럭은 여러 종류가 있지만 몇가지로 제한해서 생성해보자 */}
      {/* TODO: JSON 객체를 활용해야할 것 같음 */}
    </div>
  );
};

export default CustomNotion;
