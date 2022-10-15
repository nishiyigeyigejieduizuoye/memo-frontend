import { MemoInfo } from "@/api/schema";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface Props {
  memo: MemoInfo;
}

const MemoInfoCard = ({ memo }: Props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{memo.title}</Typography>
          <Typography variant="body1">最后修改：{memo.lastModified}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemoInfoCard;
