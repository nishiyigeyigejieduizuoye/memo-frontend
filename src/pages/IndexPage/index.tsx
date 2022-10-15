import { listMemos } from "@/api/api";
import { MemoInfo } from "@/api/schema";
import Loading from "@/components/Loading";
import MemoInfoCard from "@/components/MemoInfoCard";
import useMessage from "@/hooks/useMessage";
import { UserInfoState } from "@/state/user";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NotesIcon from "@mui/icons-material/Notes";
import "./index.css";

const IndexPage = () => {
  const userInfo = useRecoilValue(UserInfoState);
  const [loading, setLoading] = useState(true);
  const [memos, setMemos] = useState<MemoInfo[]>([]);
  const [, { addMessage }] = useMessage();

  useEffect(() => {
    (async () => {
      try {
        setMemos(await listMemos());
      } catch (e) {
        addMessage("error", "获取备忘录列表失败");
      } finally {
        setLoading(false);
      }
    })();
  }, [setMemos, setLoading]);

  return (
    <Grid container>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "300px",
            zIndex: "-1",
          },
        }}
        open
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <ListItemText primary="新建备忘录" />
            </ListItemButton>
          </ListItem>
          <Divider />
          {loading ? (
            <Loading />
          ) : (
            memos.map((m) => (
              <ListItem key={m.id}>
                <ListItemButton>
                  <ListItemIcon>
                    <NotesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={m.title}
                    secondary={new Date(m.lastModified).toLocaleString()}
                  />
                </ListItemButton>
              </ListItem>
            ))
          )}
        </List>
      </Drawer>
    </Grid>
  );
};

export default IndexPage;
