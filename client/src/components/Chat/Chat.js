import * as React from "react";
import Box from "@mui/material/Box";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Conver from "./Conver";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Utils/auth";
import "./Chat.css";
import Button from "@mui/material/Button";
import {
  deleteuser,
  getUserById,
  updateUser,
} from "../../controller/UserController";

const socket = io.connect("http://localhost:5000");

export default function Chat() {
  const { id } = useParams();
  const auth = useAuth();
  const loginUser = JSON.parse(auth.getUser());
  const userName = loginUser.first_name;
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  const joinRoom = () => {
    if (loginUser.role === "admin") {
      setRoom(id);
      socket.emit("join_room", id);
    } else {
      setRoom(loginUser._id);
      socket.emit("join_room", loginUser._id);
    }
  };

  const handleEndChat = async () => {
    var user;
    if (loginUser.role == "admin") {
      var recivedUser = await getUserById(id);
      if (recivedUser.status == 200) {
        user = recivedUser.data.msg;
        user.chat = false;
      }
    } else {
      user = loginUser;
      user.chat = false;
    }
    const response = await updateUser(user);
    if (response.status == 200) {
      navigate(-1);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    joinRoom();
  });

  return (
    <Box sx={{
      textAlign: "center",
      fontWeight: "bold",
      mt: 2,
    }}>
      <div className="header-tran">
        Welcome To Our Live Chat
      </div>
    <div className="Chat">
      {loginUser.role === "admin" ? (
        <Button
          variant="contained"
          sx={{ m: 1, color: "white", backgroundColor:"black" }}
          onClick={() => navigate(-1)}
        >
          Back to all chats
        </Button>
      ) : (
        ""
      )}
      <Conver socket={socket} username={userName} room={room} />
      <Button
        variant="contained"
        sx={{ m: 2, color: "white", backgroundColor:"black"}}
        onClick={handleEndChat}
      >
        End Chat
      </Button>
    </div>
    </Box>
  );
}
