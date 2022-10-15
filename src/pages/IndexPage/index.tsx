import { MemosState } from "@/state/user";
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
import { useRecoilValue } from "recoil";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NotesIcon from "@mui/icons-material/Notes";

const IndexPage = () => {
  const memos = useRecoilValue(MemosState);

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
          {memos.map((m) => (
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
          ))}
        </List>
      </Drawer>
      <Grid
        xs={12}
        sm={0}
        sx={{
          display: {
            sm: "none",
          },
        }}
      >
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
          {memos.map((m) => (
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
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default IndexPage;
