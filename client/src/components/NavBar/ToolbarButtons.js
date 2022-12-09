import { useAuth } from "../Utils/auth";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getAllCategories } from "../../controller/CategoryController";
import { useNavigate } from "react-router-dom";

const adminNavItems = ["users", "products", "orders", "chats"];

export default function ToolbarButtons() {
  const auth = useAuth();
  const [navItems, setNavItems] = useState(null);
  const navigate = useNavigate();

  const getCategoryNames = async () => {
    var categories = await getAllCategories();
    if (categories.status == 200) {
      categories = Array.from(categories.data.msg);
      setNavItems(categories);
    }
  };

  useEffect(() => {
    getCategoryNames();
  }, []);

  const navigateToCategory = (filter) => {
    // 👇️ navigate to /
    navigate(`/category/${filter}`);
  };

  const navigateToPage = (filter) => {
    // 👇️ navigate to /
    navigate(`/admin/${filter}`);
  };

  if (!auth.user || JSON.parse(auth.getUser()).role == "client") {
    return (
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {navItems != null
          ? navItems.map((category) => (
              <Button
                edge="end"
                key={category.name}
                sx={{ color: "black" }}
                onClick={() => navigateToCategory(category.name)}
              >
                {category.name}
              </Button>
            ))
          : ""}
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {adminNavItems != null
          ? adminNavItems.map((item) => (
              <Button
                edge="end"
                key={item}
                sx={{ color: "black" }}
                onClick={() => navigateToPage(item)}
              >
                {item}
              </Button>
            ))
          : ""}
      </Box>
    );
  }
}
