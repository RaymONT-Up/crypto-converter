import { FC } from "react";
import Title, { TitleTags, TitleTheme } from "../../components/UI/Title/Title";
import AppLink, { AppLinkTheme } from "../../components/UI/AppLink/AppLink";
import cls from "./NotFoundPage.module.scss";

const NotFoundPage: FC = (props) => {
  return (
    <div className={cls.NotFoundPage}>
      <Title
        className={cls.title}
        Tag={TitleTags.h1}
        centered={true}
        theme={TitleTheme.hero}
      >
        Page not found
      </Title>
      <AppLink to={"/"} theme={AppLinkTheme.button}>
        Please back to home
      </AppLink>
    </div>
  );
};

export default NotFoundPage;
