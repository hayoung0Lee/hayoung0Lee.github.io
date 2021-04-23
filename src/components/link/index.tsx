import Link from "next/link";
import styles from "./link.module.css";
import { FC } from "react";
import { useRouter } from "next/router";

interface Props {
  href: string;
  route: string;
}
const CustomLink: FC<Props> = ({ href, route }) => {
  const router = useRouter();

  // FIXME: 이거 좀 개선하기
  // 지금 위치의 basePath를 뽑는다. /leetcode/1 -> /leetcode
  const regExp = /^\/[\w,]+/;
  // /인경우에 매칭되는 부분이 없다 -> '/'
  const rootPath = router.asPath.match(regExp)
    ? router.asPath.match(regExp)[0]
    : "/";
  // href는 해당 버튼의 경로 /leetcode가 현재라우터의 rootPath랑 같으면 메인
  const isActive = href === rootPath;

  return (
    <Link href={href}>
      <a
        className={`${styles.link} text-center ${
          isActive ? styles.active : ""
        }`}
      >
        {route}
      </a>
    </Link>
  );
};

export default CustomLink;
