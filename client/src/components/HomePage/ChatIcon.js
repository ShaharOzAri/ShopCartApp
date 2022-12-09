import { Button } from "@mui/material";
import React from "react";
import { useAuth } from "../Utils/auth";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { getUserById, updateUser } from "../../controller/UserController";

function ChatIcon() {
  const navigate = useNavigate();
  const auth = useAuth();
  const loginUser = JSON.parse(auth.getUser());

  const handleStartChat = async () => {
    var user;
    if (loginUser.role == "client") {
      var recivedUser = await getUserById(loginUser._id);

      if (recivedUser.status == 200) {
        user = recivedUser.data.msg;
        user.chat = true;
      }
    }
    const response = await updateUser(user);
    if (response.status == 200) {
      navigate("/chat");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <Button onClick={handleStartChat}>
      <ChatBubbleOutlineOutlinedIcon
        sx={{ fontSize: "40px", color: "black" }}
      ></ChatBubbleOutlineOutlinedIcon>
    </Button>
  );
}

export default ChatIcon;
