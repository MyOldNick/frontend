//React
import React, { BaseSyntheticEvent, useState } from "react";
import { useParams } from "react-router";
//store
import HomeStore from "../../Store/Home";
//Components
import PostCard from "../../Components/PostCard/PostCard";
import TextDrawer from "../../Components/TextDrawer/TextDrawer";
//MaterialUI
import Container from "@material-ui/core/Container";

const Comment: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const { id }: any = useParams();

  const createNewComment = () => {
    if (value.length < 1) {
      HomeStore.createComment(HomeStore.allPosts[id]._id, value);
    }
  };

  const onChange = (event: BaseSyntheticEvent) => {
    const { value } = event.target;

    setValue(value);
  };

  const drawerOpen = () => {
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Container maxWidth="sm">
      <TextDrawer
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        onChange={onChange}
        formData={value}
        action={createNewComment}
      />
      <PostCard
        author={HomeStore.allPosts[id].author}
        title={HomeStore.allPosts[id].title}
        isSolo={true}
        openDrawer={drawerOpen}
      />
      {HomeStore.allPosts[id]?.comments.map((el: any, index: number) => (
        <div
          key={index}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <h3>Автор: {el.user.username}</h3>
          <p>Текст: {el.comment_data.text}</p>
        </div>
      ))}
    </Container>
  );
};

export default Comment;
