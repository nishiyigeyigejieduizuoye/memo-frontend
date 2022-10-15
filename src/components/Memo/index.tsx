import { getMemo } from "@/api/api";
import { MemoDetail, MemoInfo } from "@/api/schema";
import useMessage from "@/hooks/useMessage";
import { Grid, Tab, Tabs, TextField } from "@mui/material";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MonacoEditor from "react-monaco-editor";
import remarkGfm from "remark-gfm";
import Loading from "../Loading";
import "./index.css";

interface Props {
  memo: MemoInfo;
}

const Memo: React.FunctionComponent<Props> = ({ memo }: Props) => {
  const [tab, setTab] = useState<"view" | "edit">("view");
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<MemoDetail | null>(null);

  const [, { addMessage }] = useMessage();

  const handleChange = useCallback(
    (newVal: string) => {
      if (detail === null) return;
      setDetail({
        ...detail,
        content: newVal,
      });
    },
    [detail, setDetail]
  );

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (detail === null) return;
      setDetail({
        ...detail,
        title: e.target.value,
      });
    },
    [detail, setDetail]
  );

  let body = <></>;
  if (loading) {
    body = <Loading />;
  } else if (detail !== null) {
    if (tab === "view") {
      body = (
        <ReactMarkdown
          children={"# " + detail.title + "\n\n" + detail.content}
          remarkPlugins={[remarkGfm]}
        />
      );
    } else if (tab === "edit") {
      body = (
        <Grid container>
          <Grid item xs={12} sx={{ paddingLeft: "40px" }}>
            <TextField
              label="标题"
              value={detail.title}
              onChange={handleTitleChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "40px" }}>
            <MonacoEditor
              language="md"
              height="60vh"
              value={detail.content}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      );
    }
  }

  useEffect(() => {
    (async () => {
      try {
        setDetail(await getMemo(memo.id));
      } catch (e) {
        addMessage("error", "加载备忘录失败");
      } finally {
        setLoading(false);
      }
    })();
  }, [memo, setLoading, setDetail]);

  return (
    <Grid container justifyContent="center" className="memo-container">
      <Grid item xs={10}>
        <Tabs value={tab} onChange={(_event, newVal) => setTab(newVal)}>
          <Tab value="view" label="查看" />
          <Tab value="edit" label="编辑" />
        </Tabs>
      </Grid>
      <Grid item xs={10} sx={{ marginTop: "20px" }}>
        {body}
      </Grid>
    </Grid>
  );
};

export default Memo;
